// index.js
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
var cors = require('cors');

app.use(cors());
const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json({ strict: false }));

//Index page, used for sls-offline
app.get('/index', function (req, res) {
    res.send('Hello World!');
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify({ "message": "Hello World!" })
    };
    callback(null, response);
})

//Get User endpoint with email, most probably will be used to display users' Profiles
app.get('/users/:email', function (req, res) {
    const params = {
        TableName: USERS_TABLE,
        Key: {
            email: req.params.email,
        },
    }

    dynamoDb.get(params, (error, result) => {
        if (error) {
            console.log(error);
            res.status(400).json({ error: 'Could not get user' });
        }
        if (result.Item) {
            const { email, password, firstName, lastName } = result.Item;
            res.json({ email, password, firstName, lastName });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    });
})

// Create User endpoint with email & NAME
app.post('/users', function (req, res) {
    const headers = {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    }

    const { email, password, firstName, lastName } = req.body;
    if (typeof email !== 'string') {
        res.status(400).json({ error: '"email" must be a string' });
    } else if (typeof password !== 'string') {
        res.status(400).json({ error: '"password" must be a string' });
    }else if (typeof firstName !== 'string') {
        res.status(400).json({ error: '"firstName" must be a string' });
    }else if (typeof lastName !== 'string') {
        res.status(400).json({ error: '"lastName" must be a string' });
    }

    const params = {
        TableName: USERS_TABLE,
        Item: {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        },
    };

    dynamoDb.put(params, (error) => {
        // Set response headers to enable CORS (Cross-Origin Resource Sharing)
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        };

        if (error) {
            console.log(error);
            console.log(error.message);
            res.status(400).json({ error: 'Could not create user' });
        }
        
        res.json({ email, password, firstName, lastName });
    });
})


module.exports.handler = serverless(app);