const express = require('express')
const router = express.Router()
const controllers = require("../controllers/departments")

router.get('/', controllers.getDepartment);
router.get('/:id', controllers.getDepartmentById);
router.get('/:dept_name', controllers.getDepartmentByName);

module.exports = router