// Now we are going to add an API that returns a list of all the notes a user has.
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    // 'KeyConditionExpression' defines the condition for the query
    // - 'userId = :userId': only return items with matching 'userId'
    //   partition key
    // 'ExpressionAttributeValues' defines the value in the condition
    // - ':userId': defines 'userId' to be Identity Pool identity id
    //   of the authenticated user
    // KeyConditionExpression: "userId = :userId",
    // ExpressionAttributeValues: {
    //   ":userId": {S:'USER-SUB-1234'}
    // }
    KeyConditionExpression: "email = :email",
    ExpressionAttributeValues: {
      ":email": {S:`{event.email}`}
    }
  };

  // return event.requestContext.identity.cognitoIdentityId;

  const result = await dynamoDb.query(params);

  // Return the matching list of items in response body
  return result.Items;

  //  return params;
});