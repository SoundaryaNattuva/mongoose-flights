import { Flight } from '../models/flights.js'
import { Meal } from "../models/meal.js"

function index(req,res){
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'List of all flights'
    })
  })
  .catch(error => {
    res.redirect('/')
  })
}

function newFlight(req, res){
 res.render('flights/new', {
  title: "Add Flight",
 })
}

function create(req,res){
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    res.redirect('/flights/new')
  })
}


function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.flightId)
  .then(flight => {
    res.redirect("/flights")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/flights")
  })
}

function show(req,res){
  Flight.findById(req.params.flightId)
  .populate('meals')
  .then(flight => {
    Meal.find({_id: {$nin: flight.meals}})
    .then(meals => {
      res.render('flights/show', {
        flight,
        title: 'Flight Details',
        meals: meals
      })
    })
    .catch(err => {
      console.log(err)
    res.redirect('/')
  })
})
.catch(err => {
  console.log(err)
  res.redirect('/')
})
}


function edit(req,res){
  Flight.findById(req.params.flightId)
  .then(flight => {
    const flightDefaultDate = flight.departs.toISOString().slice(0,16)
    res.render(`flights/edit`,{
      flight:flight,
      flightDefaultDate:flightDefaultDate,
      title: "Edit Flight"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/flights")
  })
}

function update(req,res){
  Flight.findByIdAndUpdate(req.params.flightId, req.body, {new: true})
  .then(flight => {
    res.redirect(`/flights/`)
  })
  .catch(err => {
    console.log(err)
    res.redirect("/flights")
  })
}

function createTicket(req, res){
  Flight.findById(req.params.flightId)
  .then(flight => {
    flight.ticket.push(req.body)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


function addToMeals(req, res){
  Flight.findById(req.params.flightId)
  .then(flight => {
    flight.meals.push(req.body.mealId)
    flight.save()
		.then(() => {
		  res.redirect(`/flights/${flight._id}`)
		})
    .catch(err => {
      console.log(err)
      res.redirect("/flights")
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/flights")
  })
}

export {
  index,
  newFlight as new,
  create,
  deleteFlight as delete,
  edit,
  update,
  show,
  createTicket,
  addToMeals
}