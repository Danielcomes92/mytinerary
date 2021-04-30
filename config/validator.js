const joi = require('joi');

const validator = (req, res, next) => {
    const schema = joi.object({
        firstName: joi.string().trim().min(2).max(20).required().pattern(new RegExp(/[a-zA-Z]/)),
        lastName: joi.string().trim().min(2).max(20).required(),
        email: joi.string().required().trim().email(),
        urlPic: joi.string().trim().min(5).required(),
        country: joi.string().required(),
        //5 o mas caracteres y al menos un numero
        password: joi.string().alphanum().min(5).trim().required().pattern(/(?=.*[0-9])(?=.{5,})/)   
    })

    const validation = schema.validate(req.body, {abortEarly: false});

    if(validation.error) {
        console.log(validation)
        return res.json({
            success: false,
            errors: validation.error
        })
    }
    
    next();
}

module.exports = validator;