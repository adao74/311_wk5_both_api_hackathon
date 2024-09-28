const express = require('express')
const router = express.Router()
const controllers = require("../controllers/departments")

router.get('/', controllers.getDepartment);
router.get('/:id', controllers.getDepartmentById);
router.get('/name/:dept_name', controllers.getDepartmentByName);

module.exports = router