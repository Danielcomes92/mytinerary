const validator = (req, res, next) => {
    const { city, country, image, continent, flag } = req.body;
    if(city === '' || country === '' || image === '' || continent === '' || flag === '')  {
        return res.json({success: false, message: 'One or more fields incomplete'})
    }
    next()
}

module.exports = validator;