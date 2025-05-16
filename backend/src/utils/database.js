const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: process.env.DYNAMODB_REGION,
    endpoint: process.env.DYNAMODB_ENDPOINT,
});

module.exports = dynamoDb;