const Activity = require('../models/Activity');

const ActivitiesController = {

    addActivity: async (req, res) => {
        const activity = new Activity(req.body)
        let error;
        let message;
        try {
            await activity.save()
            message = 'Activity added succesfully'
        } catch {
            error = "Activity couldn't be added succesfully"
        }
        res.json({
            success: error ? false : true,
            message,
            error
        })
    },

    getItineraryActivities: async (req, res) => {
        let response;
        let error;
        try {
            const itineraryActivities = await Activity.find({itineraryId: req.params.id})
            if(itineraryActivities.length > 0) {
                response = itineraryActivities;            
            } else {
                error = "No activities found"
            }
        } catch {
            error = "Internal database error"
        }
        res.json({
            success: error ? false : true,
            response,
            error
        })
    }
}


module.exports = ActivitiesController;