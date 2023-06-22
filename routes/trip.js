const express = require('express')
const router = express.Router();
const authMiddleware = require("../middleware/auth");

const {ADD_TRIP, GET_TRIPS, GET_TRIPS_BY_ID, DELETE_TRIP, UPDATE_TRIP} = require("../controllers/trip")

router.post('/addTrip', authMiddleware, ADD_TRIP)
router.get('/trips',  GET_TRIPS)
router.get('/trip/:id', GET_TRIPS_BY_ID)
router.delete('/deleteTrip',authMiddleware, DELETE_TRIP)
router.delete('/updateTrip', authMiddleware, UPDATE_TRIP)

module.exports = router;