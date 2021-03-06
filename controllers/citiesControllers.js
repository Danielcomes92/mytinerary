const City = require('../models/City')

const citiesController = {
    getCities: async (req, res) => {
        try {
            const allCities = await City.find()
            res.json({
                response: allCities,
                success: true
            })
        } catch(error) {
            res.json({success: false, error})
        }
    },

    getCity: async (req, res) => {
        try {
            const city = await City.findById(req.params.id)
            res.json({
                response: city,
                success: true
            })
        } catch (error) {
            res.json({success: false, message: "The city couldn't be found", error})
        }
    },

    addCity: async (req, res) => {
        const city = new City(req.body)
        try {
            await city.save()   
            res.json({message: 'City added successfully'})
        } catch (error) {
            res.json({success: false, message: "The city couldn't be added", error})
        }
    },

    modifyCity: async(req, res) => {
        try {
            const city = await City.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
            res.json(city)
        } catch (error) {
            res.json({success: false, message: "The city couldn't be modified", error})
        }
    },

    removeCity: async(req, res) => {
        try {
            await City.findOneAndRemove({_id: req.params.id})
            res.json({message: 'City removed successfully'})
        } catch (error) {
            res.json({success: false, message: "The city couldn't be removed", error})
        }
    }
}

module.exports = citiesController