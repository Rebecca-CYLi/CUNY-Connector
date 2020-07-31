// import * as uuid from "uuid";
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
      // userId: event.requestContext.identity.cognitoIdentityId,
      // noteId: uuid.v1(),
      // content: data.content,
      // attachment: data.attachment,
      // createdAt: Date.now()

    //   userId: uuid.v1(),
      email: data.email,
      password: data.password,
      // firstName: data.firstName,
      // lastName: data.lastName,
      // userType: data.userType,
      // college: data.college,
      // year: data.year,
      // collegeType: data.collegeType,
      // skill: data.skill,
      // skillLevel: data.skillLevel,
      // socialMedia: data.socialMedia,
      // goal: data.goal,
      // createdAt: Date.now(),
    }
  };

  await dynamoDb.put(params);

  return params.Item;
});