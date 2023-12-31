const express = require('express')
const router = express.Router();
const authMiddleware = require("../middleware/auth");

const {REMOVE_USER_TRIP, ADD_TRIP, GET_TRIPS, GET_TRIPS_BY_ID, DELETE_TRIP, UPDATE_TRIP, ADD_TRIP_TO_USER} = require("../controllers/trip")

router.post('/addTrip', ADD_TRIP)
router.get('/trips',  GET_TRIPS)
router.get('/trip/:id', GET_TRIPS_BY_ID)
router.post('/addTripToUser/:id', authMiddleware, ADD_TRIP_TO_USER)
router.delete('/removeUserTrip/:id', authMiddleware, REMOVE_USER_TRIP)
router.delete('/deleteTrip/:id', DELETE_TRIP)
router.put('/updateTrip', authMiddleware, UPDATE_TRIP)

module.exports = router;