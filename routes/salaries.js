const express = require('express')
const router = express.Router()
const controllers = require("../controllers/salaries.js")

router.get('/', controllers.getSalaries);
router.get('/:id', controllers.getSalariesEmployeeById);
router.get('/:salary', controllers.getSalariesBySalary);
router.get('/from_date/:id', controllers.getSalariesByFromDate);
router.get('/to_date/:id', controllers.getSalariesByToDate);

module.exports = router