import mongoose from "mongoose"

const mySchema = mongoose.Schema

const ticketSchema = new mySchema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number,
    min: 0,
  }},{
  timestamps: true
})

const flightsSchema = new mySchema ({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date,
  ticket: [ticketSchema],
  meals: [{type: mySchema.Types.ObjectId, ref: "Meal"}] 
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightsSchema)

export {
  Flight
}