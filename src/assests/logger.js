require('dotenv').config();
const winston = require('winston');

const WinstonSlacker = require('winston-slacker');

const webHook = process.env.SLACK_WEBHOOK;

const slackChannel = process.env.SLACK_CHANNEL;

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

// these are the options for connecting to the slack workspace
const options = {
  webhook: webHook,
  channel: slackChannel,
  username: 'hacknode-logger',
};

// this is for logging to the slack workspace
const externalLogger = winston.add(new WinstonSlacker(options));

if (process.env.NODE_ENV === 'development') {
  module.exports = { logger: fileLogger };
} else if (process.env.NODE_ENV === 'production') {
  module.exports = { logger: externalLogger };
}
