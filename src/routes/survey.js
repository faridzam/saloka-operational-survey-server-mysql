const express = require('express');
const controllers = require("../controllers")
const router = express.Router();

router.post('/getCustomerById', controllers.Survey.GetCustomerByID);

router.post('/customer', controllers.Survey.Customer);
router.post('/satisfaction', controllers.Survey.Satisfaction);
router.post('/visit', controllers.Survey.Visit);

module.exports = router;