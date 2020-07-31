import AWS from "aws-sdk";
// const client = new AWS.DynamoDB.DocumentClient();
var docClient = new AWS.DynamoDB();
export default {
  get   : (params) => docClient.get(params).promise(),
  put   : (params) => docClient.put(params).promise(),
  query : (params) => docClient.query(params).promise(),
  update: (params) => docClient.update(params).promise(),
  delete: (params) => docClient.delete(params).promise(),
};