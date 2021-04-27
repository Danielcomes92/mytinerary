const express = require('express');
const router = express.Router();

const validator = require('../config/validator');

const citiesController = require('../controllers/citiesControllers');
const itinerariesController = require('../controllers/itinerariesControllers');

const {getItineraries, getCityItineraries, getItinerary, addItinerary, modifyItinerary, removeItinerary} = itinerariesController;
const {getCities, getCity, addCity, modifyCity, removeCity} = citiesController;


//cities
router.route('/cities')
    .get(getCities)
    .post(validator, addCity)

router.route('/city/:id')
    .get(getCity)
    .put(modifyCity)
    .delete(removeCity)
    
//itineraries
router.route('/itineraries')
    .get(getItineraries)//
    .post(addItinerary)//

router.route('/itineraries/:id')
    .get(getCityItineraries)

router.route('/itinerary/:id')
    .get(getItinerary)//
    .put(modifyItinerary)
    .delete(removeItinerary)

//users
router.route('/users')
    // .get(getUsers)
    // .post(addUser)

router.route('/user/:id')
    // .post(logUser)
    // .get(getUser)
    // .put(modifyUser)
    // .delete(removeUser)

module.exports = router;