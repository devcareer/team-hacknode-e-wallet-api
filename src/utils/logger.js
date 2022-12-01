const winston = require('winston');
const SlackHook = require('winston-slack-webhook-transport');

const slackChannel = process.env.SLACK_CHANNEL;

const slackUrl = process.env.SLACK_WEBHOOK;

const { colorize, combine, timestamp } = winston.format;

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
const externalLogger = winston.createLogger({ level: 'debug' });

externalLogger.add(
  new SlackHook({
    webhookUrl: slackUrl,
    formatter: combine(colorize(), timestamp()),
    username: 'hackNode-logger',
    channel: slackChannel,
  })
);

if (process.env.NODE_ENV === 'development') {
  module.exports = fileLogger;
} else if (process.env.NODE_ENV === 'production') {
  module.exports = externalLogger;
}