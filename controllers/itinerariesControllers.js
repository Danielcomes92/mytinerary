const Itinerary = require('../models/Itinerary');

const itinerariesController = {
    
    //obtener todos los itinerarios
    getItineraries: async (req, res) => {
        try {
            const allItineraries = await Itinerary.find()
            res.json({
                response: allItineraries,
                success: true
            })            
        } catch (error) {
            res.json({
                error,
                success: false
            })
        }
    },

    //obtener los itinerarios de una ciudad en particular
    getCityItineraries: async (req, res) => {
        try {
            const cityItineraries = await Itinerary.find({cityId: req.params.id})
            res.json({
                response: cityItineraries,
                success: true
            })
        } catch (error) {
           res.json({
               error,
               success: false
           })
        }
    },

    //obtener un itinerario en particular
    getItinerary: async (req, res) => {
        try {
            const itinerary = await Itinerary.findById(req.params.id)
            if(itinerary) {
                res.json({
                    response: itinerary,
                    success: true
                })
            } else {
                res.json({
                    message: "The itinerary searched isn't in our database",
                    success: false
                })
            }
        } catch (error) {
            res.json({
                error,
                message: "The search has one or more errors",
                success: false
            })
        }
    },

    //agregar un itinerario
    addItinerary: async (req, res) => {
        const itinerary = new Itinerary(req.body)
        try {
            await itinerary.save()
            res.json({
                message: 'Itinerary added succesfully',
                success: true
            })
        } catch (error) {
            res.json({
                error,
                message: "Itinerary couldn't be added",
                success: false
            })
        }
    },  

    //modificar un itinerario
    modifyItinerary: async (req, res) => {
        try {
            const itinerary = await Itinerary.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
            res.json({
                response: itinerary,
                success: true
            })
        } catch (error) {
            res.json({
                error,
                message: "Itinerary could'nt be modified",
                success: false
            })
        }
    },

    //borrar un itinerario
    removeItinerary: async (req, res) => {
        try {
            await Itinerary.findOneAndRemove({_id: req.params.id})
            res.json({
                message: "Itinerary removed successfully",
                success: true
            })
        } catch (error) {
            res.json({
                error,
                message: "The itinerary couldn't be removed",
                success: false
            })
        }
    },

    addComment: async (req, res) => {  
        const { comment } = req.body;
        const { _id, firstName, urlPic } = req.user;

        let response;
        let error;
        try {
            response = await Itinerary.findOneAndUpdate({_id: req.params.id}, {$push: { comments: {userId: _id, user: firstName, userImg: urlPic, message: comment}}}, {new: true})
        } catch (error) {
            error = "Database internal error"
        }
        
        res.json({
            success: !error ? true : false,
            response,
            error
        })
    },

    getComments: async(req, res) => {
        let error;
        let response; 
        // console.log(req.params.id)
        try {
            const itineraryComments = await Itinerary.find({_id: req.params.id})
            console.log(itineraryComments)
            
        } catch {
            console.log("Database internal error")
        }
        // res.json({
        //     error,
        //     success: false
        // })
    }
}

module.exports = itinerariesController;