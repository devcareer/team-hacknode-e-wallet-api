const winston = require('winston');

const slackChannel = process.env.SLACK_CHANNEL;

const slackUrl = process.env.SLACK_WEBHOOK;

const SlackHook = require('winston-slack-hook');

// this is for logging externally to slack channel and to log files during development

const developmentLogger = winston.createLogger({
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
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

// this is for logging to only slack during production
const productionLogger = winston.createLogger({
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
  module.exports = developmentLogger;
} else if (process.env.NODE_ENV === 'production') {
  module.exports = productionLogger;
}
