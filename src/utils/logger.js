const winston = require('winston');

const slackChannel = process.env.SLACK_CHANNEL;

const slackUrl = process.env.SLACK_WEBHOOK;

// this is for logging locally to the combined.log and error.log files
const fileLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-sevice' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// this is for logging externally to slack channel
const SlackHook = require('winston-slack-hook');

const externalLogger = winston.createLogger({
  transports: [
    new SlackHook({
      hookUrl: slackUrl,
      username: 'hackNode-logger',
      channel: slackChannel,
      formatter(options) {
        const { message } = options; // original message

        return ` ${process.env.NODE_ENV}  ${message}`;
      },
      colors: {
        warn: 'warning',
        error: 'danger',
        info: 'good',
        debug: '#bbddff',
      },
    }),
  ],
});

if (process.env.NODE_ENV === 'development') {
  module.exports = externalLogger;
} else if (process.env.NODE_ENV === 'production') {
  module.exports = externalLogger;
}
