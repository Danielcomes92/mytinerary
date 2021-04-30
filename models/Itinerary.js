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
    hashtags: [String],
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

// itinerarySchema.path('hashtags').validate(function (value) {
//     console.log(value.length)
//     if (value.length > 5 && value.length <= 1 ) {
//       throw new Error("Assigned person's size can't be greater than 10!");
//     }
// });

const Itinerary = mongoose.model('itinerary', itinerarySchema);

module.exports = Itinerary;