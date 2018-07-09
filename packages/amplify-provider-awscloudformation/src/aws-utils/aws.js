const aws = require('aws-sdk');
const configurationManager = require('../../lib/configuration-manager');

// AWS promise with configuration through Odin
aws.configureWithCreds = context => {
  return configurationManager.loadConfiguration(context, aws);
};


module.exports = aws;
