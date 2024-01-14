import mongoose from "mongoose"

const mySchema = mongoose.Schema

const flightsSchema = new mySchema ({
  airline: [String],
  airport: [String],
  flightNo: Number,
  departs: Date,
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightsSchema)

export {
  Flight
}