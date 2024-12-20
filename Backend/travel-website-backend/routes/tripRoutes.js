const express = require('express');
const { getAllTrips } = require('../controllers/tripController');

const router = express.Router();

router.get('/', getAllTrips);

module.exports = router;
