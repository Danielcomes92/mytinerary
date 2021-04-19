const express = require('express');
const validator = require('../config/validator');
const router = express.Router()
const citiesController = require('../controllers/citiesControllers')
const {getCities, getCity, addCity, modifyCity, removeCity} = citiesController


router.route('/cities')
    .get(getCities)
    .post(validator, addCity)

router.route('/city/:id')
    .get(getCity)
    .put(modifyCity)
    .delete(removeCity)

module.exports = router