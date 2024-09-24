require('dotenv').config()

const express = require('express')
const bodyParser = require("body-parser");
const routerEmployees = require('./routes/employee.js');
const routerDepartments = require('./routes/departments.js');
const routerDeptEmp = require('./routes/dept_emp.js');
const routerDeptManager = require('./routes/dept_manager.js');
const routerSalaries = require('./routes/salaries.js');
const routerTitles = require('./routes/titles.js');
const connection = require('./mysql/connection.js')

const app = express()

const port = process.env.PORT || 4002

app.use(bodyParser.json())

app.use('/employees', routerEmployees)
app.use('/departments', routerDepartments)
app.use('/dept_emp', routerDeptEmp)
app.use('/dept_manager', routerDeptManager)
app.use('/salaries', routerSalaries)
app.use('/titles', routerTitles)

app.use((req, res, next) => {
    console.log('Request received:', req.method, req.url);
    next(); // Pass control to the next middleware function
  });

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});