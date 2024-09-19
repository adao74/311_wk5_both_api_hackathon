require('dotenv').config()

const express = require('express')

const app = express()

const bodyParser = require("body-parser");
const router = require('./routes/employee.js');


app.use((req, res, next) => {
    console.log('Request received:', req.method, req.url);
    next(); // Pass control to the next middleware function
  });

app.use(bodyParser.json())
app.use('/', router)

const port = 4002

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});