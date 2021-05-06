const express = require('express');
const router = express.Router();

const validator = require('../config/validator');
const passport = require('passport')

const citiesController = require('../controllers/citiesControllers');
const itinerariesController = require('../controllers/itinerariesControllers');
const usersControllers = require('../controllers/usersControllers');
const activitiesControllers = require('../controllers/activitiesController');

const {getItineraries, getCityItineraries, getItinerary, addItinerary, modifyItinerary, removeItinerary, addComment, removeComment, updateComment} = itinerariesController;
const {getCities, getCity, addCity, modifyCity, removeCity} = citiesController;
const {addUser, logUser, loginWithLS} = usersControllers;
const {addActivity, getItineraryActivities} = activitiesControllers;

//cities
router.route('/cities')
    .get(getCities)
    .post(addCity)

router.route('/city/:id')
    .get(getCity)
    .put(modifyCity)
    .delete(removeCity)

    
//itineraries
router.route('/itineraries')
    .get(getItineraries)
    .post(addItinerary)

router.route('/itineraries/:id')
    .get(getCityItineraries)

router.route('/itinerary/:id')
    .get(getItinerary)
    .put(modifyItinerary)
    .delete(removeItinerary)
    
router.route('/enterComment/:id')
    .post(passport.authenticate('jwt', {session: false}), addComment)

router.route('/removeComment/:id')
    .delete(passport.authenticate('jwt', {session: false}), removeComment)
    
router.route('/updateComment/:id')
    .delete(passport.authenticate('jwt', {session: false}), updateComment)
    

//users
router.route('/signup')
    .post(validator, addUser)

router.route('/login')
    .post(logUser)

router.route('/loginLS')
    .get(passport.authenticate('jwt', {session: false}), loginWithLS)


//activities
router.route('/activity')
    .post(addActivity)

router.route('/activities/:id')
    .get(getItineraryActivities)

module.exports = router;