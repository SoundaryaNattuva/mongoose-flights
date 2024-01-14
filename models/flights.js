import mongoose from "mongoose"

const mySchema = mongoose.Schema

const flightsSchema = new mySchema ({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date,
})

const Flight = mongoose.model('Flights', flightsSchema)

export {
  Flight
}