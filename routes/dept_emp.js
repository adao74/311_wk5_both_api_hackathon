const express = require('express')
const router = express.Router()
const controllers = require("../controllers/dept_emp.js")

router.get('/', controllers.getDepartmentEmployee);
router.get('/:id', controllers.getDepartmentEmployeeById);
router.get('/:dept_no', controllers.getDepartmentEmployeeNumberById);
router.get('/from_date/:id', controllers.getDepartmentEmployeeByFromDate);
router.get('/to_date/:id', controllers.getDepartmentEmployeeByToDate);

module.exports = router