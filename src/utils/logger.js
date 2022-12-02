const winston = require('winston');

const { SLACK_CHANNEL, SLACK_WEBHOOK, NODE_ENV } = process.env;

// this is for logging externally to slack channel and to log files during development
const SlackHook = require('winston-slack-hook');

const developmentLogger = winston.createLogger({
  transports: [
    new SlackHook({
      hookUrl: SLACK_WEBHOOK,
      username: 'hackNode-logger',
      channel: SLACK_CHANNEL,
      formatter(options) {
        const { message } = options; // original message

        return ` ${NODE_ENV}:  ${message}`;
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

// this is for logging to only to slack during production
const productionLogger = winston.createLogger({
  transports: [
    new SlackHook({
      hookUrl: SLACK_WEBHOOK,
      username: 'hackNode-logger',
      channel: SLACK_CHANNEL,
      formatter(options) {
        const { message } = options; // original message

        return ` ${NODE_ENV}:  ${message}`;
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

if (NODE_ENV === 'production') {
  module.exports = productionLogger;
} else {
  module.exports = developmentLogger;
}
