import { Flight } from '../models/flights.js'

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

export {
  index
}