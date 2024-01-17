import mongoose from "mongoose"

const mySchema = mongoose.Schema

const mealSchema = new mySchema({
name: String
})

const Meal = mongoose.model('Meal', mealSchema)

export {
  Meal
}