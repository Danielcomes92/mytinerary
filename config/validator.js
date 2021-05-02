const joi = require('joi');

const validator = (req, res, next) => {
    const schema = joi.object({
        firstName: 
        joi.string()
        .trim()
        .required()
        .min(2).message("The first name length must be superior of 1")
        .pattern(new RegExp(/^[a-zA-Z]+$/)).message("The first name only can contain letters"),

        lastName:
        joi.string()
        .trim()
        .required()
        .min(2).message("The last name length must be superior of 1")
        .pattern(new RegExp(/^[a-zA-Z]+$/)).message("The last name only can contain letters"),

        email:
        joi.string()
        .trim()
        .required()
        .email().message("The email format is invalid"),

        urlPic:
        joi.string()
        .trim()
        .required()
        .min(5).message("The url picture is invalid"),

        country: joi.string().required(),

        password:
        joi.string()
        .alphanum()
        .trim()
        .required()
        .min(5).message("The password must be superior of 4")
        .pattern(/(?=.*[0-9])/).message("Password must contain numbers and letters")
    })

    const validation = schema.validate(req.body, {abortEarly: false});

    if(validation.error) {
        // console.log(validation)
        return res.json({
            success: false,
            validatorErrors: validation.error
        })
    }
    next();
}

module.exports = validator;