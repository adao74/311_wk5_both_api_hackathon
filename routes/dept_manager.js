const express = require('express')
const router = express.Router()
const controllers = require("../controllers/dept_manager.js")

router.get('/', controllers.getDepartmentManager);
router.get('/:id', controllers.getDepartmentManagerById);
router.get('/department_manager/:dept_no', controllers.getDepartmentManagerNumberById);
router.get('/from_date/:id', controllers.getDepartmentManagerByFromDate);
router.get('/to_date/:id', controllers.getDepartmentManagerByToDate);

module.exports = router