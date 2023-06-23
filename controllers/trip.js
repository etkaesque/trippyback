
const tripModel = require('../models/trip')
const userModel = require("../models/user")
const uniqid = require("uniqid")

module.exports.ADD_TRIP = async (req, res) => {

    console.log("Trip add request recieved.")
    console.log(req.body.travel_by)

    try {
        const trip = new tripModel({
            id: uniqid(),
            destination_city: req.body.destination_city,
            destination_country: req.body.destination_country,
            date: req.body.date,
            duration: req.body.duration,
            imageUrl: req.body.imageUrl,
            free_food: req.body.free_food,
            price: req.body.price,
            date_uploaded: new Date(),
            travel_by: req.body.travel_by,
            description: req.body.description,
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
            {destination_city: req.body.destination_city},
            {destination_country: req.body.destination_country},
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

    console.log("Get trips request recieved")

    try {
        const trips = await tripModel.find()
        res.status(200).json({ trips });

    } catch (error) {
        res.status(400).json({ error });
    }

    

}

module.exports.GET_TRIPS_BY_ID = async (req, res) => {


    
    try {
        const trip = await tripModel.find({ id: req.params.id})
        res.status(200).json({ trip });

    } catch (error) {
        res.status(400).json({ error });
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


module.exports.ADD_TRIP_TO_USER = async (req, res) => {
    console.log("add trip request")
    const userID = req.body.id;
    const tripID = req.params.id;
  
    try {
      const user = await userModel.findOne({ id: userID });
      if (!user) {
        console.log("user not found")
        return res.status(404).json({ error: "User not found." });
       
      }

      console.log("user found")
  
      const trip = await tripModel.findOne({ id: tripID });
      if (!trip) {
        console.log("trip not found")
        return res.status(404).json({ error: "Trip not found." });
      }

      console.log("trip was found")


        userModel
          .updateOne(
            { id: userID },
            { $push: { booked_trips: tripID } }
          )
          .exec();
  
        res.status(200).json({ message: "Trip booked successfully." });
      
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to book a Trip." });
    }
  };