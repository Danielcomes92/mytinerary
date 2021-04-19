const City = require('../models/City')

const citiesController = {
    getCities: async (req, res) => {
        const allCities = await City.find()
        res.json({
            response: allCities,
            success: true
        })
    },

    getCity: async (req, res) => {
        try {
            const city = await City.findById(req.params.id)
            res.json({
                response: city,
                success: true
            })
        } catch (error) {
            console.log(error)
        }
    },

    addCity: async (req, res, next) => {
        const city = new City(req.body)
        try {
            await city.save()   
            res.json({message: 'City added succesfully'})
        } catch (error) {
            console.log(error)
            next()
        }
    },

    modifyCity: async(req, res, next) => {
        try {
            const city = await City.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
            res.json(city)
        } catch (error) {
            console.log(error)
            next()
        }
    },

    removeCity: async(req, res, next) => {
        try {
            await City.findOneAndRemove({_id: req.params.id})
            res.json({message: 'City removed succesfully'})
        } catch (error) {
            console.log(error)
            next()
        }
    }
}

module.exports = citiesController