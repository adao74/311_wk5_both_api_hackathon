const express = require('express')
const router = express.Router()
const controllers = require("../controllers/titles.js")

router.get('/', controllers.getTitles);
router.get('/:id', controllers.getTitlesEmployeeById);
router.get('/:title', controllers.getTitlesByTitle);
router.get('/from_date/:id', controllers.getTitlesByFromDate);
router.get('/to_date/:id', controllers.getTitlesByToDate);

module.exports = router