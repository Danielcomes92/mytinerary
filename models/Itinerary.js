const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    authorPic: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    duration: {
        type: Number,
        required: true,
        min: 1,
        max: 8
    },
    likes: {
        type: Number,
        required: true
    },
    usersLiked: [String],
    hashtags: [{
        type: String,
        required: true,
        min: 2,
        max: 3
    }],
    comments: [{
        user: {
            type: mongoose.Types.ObjectId, ref: 'user'
        },
        message: {
            type: String,
            required: true
        }
    }],
    cityId: {
        type: mongoose.Types.ObjectId, ref: 'city',
        required: true
    }
})

const Itinerary = mongoose.model('itinerary', itinerarySchema);

module.exports = Itinerary;