require('dotenv').config()

const express = require('express')
const bodyParser = require("body-parser");
const routerEmployees = require('./routes/employee.js');
const connection = require('./mysql/connection.js')

const app = express()

const port = process.env.PORT || 4002

app.use(bodyParser.json())

app.use(routerEmployees)

app.use((req, res, next) => {
    console.log('Request received:', req.method, req.url);
    next(); // Pass control to the next middleware function
  });

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});