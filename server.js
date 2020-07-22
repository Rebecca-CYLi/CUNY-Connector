// Tutorial Link: https://medium.com/@maison.moa/setting-up-an-express-backend-server-for-create-react-app-bc7620b20a61

// This is where will create the Express server, so consider it the 
// lifeblood of our backend.


const serverless = require('serverless-http');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  res.send('Hello World!')
});

module.exports.handler = serverless(app);