const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true
    },
    flag: {
        type: String,
        required: true
    }    
})

const City = mongoose.model('city', citySchema)
module.exports = City;