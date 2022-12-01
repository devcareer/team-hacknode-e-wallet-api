const { createLogger, format, transports } = require('winston');
const { combine, timestamp, colorize, printf } = format;
const winston = require('winston');
// eslint-disable-next-line no-unused-vars
const level = process.env.LOG_LEVEL || 'debug';

// eslint-disable-next-line no-shadow
const myFormat = printf(({  'debug', message, label, timestamp }) => ` development ${timestamp} ${level}: ${message}`);

// const logger = createLogger({
//   format: combine(colorize(), timestamp(), myFormat),
//   transports: [new transports.Console()],
// });

// ----------------------------------------------------------------
const SlackHook = require('winston-slack-webhook-transport');

const logger = winston.createLogger({level: 'debug'});

logger.add(
  new SlackHook({
    webhookUrl: 'https://hooks.slack.com/services/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',
    formatter: combine(colorize(), timestamp(), myFormat),
    username: 'hackNode-logger',
    channel: 'hacknode-logs',
  })
);

module.exports = { logger };
