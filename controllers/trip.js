
const tripModel = require('../models/trip')
const uniqid = require("uniqid")

module.exports.ADD_TRIP = async (req, res) => {

    try {
        const trip = new tripModel({
            id: uniqid(),
            destination: req.body.destination,
            date: req.body.date,
            duration: req.body.duration,
            imageUrl: req.body.imageUrl,
            free_food: req.body.free_food,
            price: req.body.price,
        })
        
        const savedTrip = await trip.save();
        res.status(200).json({ response: savedTrip });
    } catch(error) {
        res.status(400).json({ error: error });
    }

}

module.exports.UPDATE_TRIP = async (req, res) => {

    try {

            
        await tripModel.updateOne(
            {destination: req.body.destination},
            {date: req.body.date},
            {duration: req.body.destination},
            {imageUrl: req.body.imageUrl},
            {free_food: req.body.free_food},
            {price: req.body.price}
        )

        res.status(200).json({ response: "Trip was updated" });

    } catch (error) {
        res.status(400).json({ error: error });

    }

}

module.exports.GET_TRIPS = async (req, res) => {

    try {
        const trips = await tripModel.find()
        res.status(200).json({ response: trips });

    } catch (error) {
        res.status(400).json({ error: error });
    }

    

}

module.exports.GET_TRIPS_BY_ID = async (req, res) => {


    
    try {
        const trip = await tripModel.find({ id: req.params.id})
        res.status(200).json({ response: trip });

    } catch (error) {
        res.status(400).json({ error: error });
    }



}

module.exports.DELETE_TRIP = async (req, res) => {


    try {
        await tripModel.deleteOne({ id: req.params.id})
        res.status(200).json({ response: "Trip was deleted" });

    } catch (error) {
        res.status(400).json({ error: error });
    }


}

