import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    // 'Item' contains the attributes of the item to be created
    // - 'userId': user identities are federated through the
    //             Cognito Identity Pool, we will use the identity id
    //             as the user id of the authenticated user
    // - 'noteId': a unique uuid
    // - 'content': parsed from request body
    // - 'attachment': parsed from request body
    // - 'createdAt': current Unix timestamp
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now()


    //   userId: uuid.v1(),
    //   createdAt: Date.now(),
    //   email: data.email,
    //   password: data.password,
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   userType: data.userType,
    //   college: data.college,
    //   year: data.year,
    //   collegeType: data.collegeType,
    //   skill: data.skill,
    //   skillLevel: data.skillLevel,
    //   socialMedia: data.socialMedia,
    //   goal: data.goal
    }
  };

  // dynamoDb.put(params, (error, data) => {
  //   // Set response headers to enable CORS (Cross-Origin Resource Sharing)
  //   const headers = {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Credentials": true
  //   };

  //   // Return status code 500 on error
  //   if (error) {
  //     const response = {
  //       error: error,
  //       statusCode: 500,
  //       headers: headers,
  //       body: JSON.stringify({ status: false })
  //     };
  //     callback(null, response);
  //     return;
  //   }

  //   // Return status code 200 and the newly created item
  //   const response = {
  //     statusCode: 200,
  //     headers: headers,
  //     body: JSON.stringify(params.Item)
  //   };
  //   callback(null, response);
  // });

  await dynamoDb.put(params);

  return params.Item;
});