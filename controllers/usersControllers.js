const User = require('../models/User');

const usersControllers = {

    addUser: async(req, res) => {
        const { email } = req.body;
        const emailInDatabase = await User.findOne({email});
        let response;
        let error;
        if(!emailInDatabase) {
            try {
                const user = new User(req.body);
                await user.save();
                response = user;         
            } catch {
                error = "An error happened with the database";
            }
        } else {
            error = "Email is already used";
        }

        res.json({
            success: !error ? true : false,
            response,
            error
        })
    },

    logUser: async (req, res) => {
        const { email, password } = req.body;
        const emailInDatabase = await User.findOne({email});
        let response;
        let error;
        if(emailInDatabase && emailInDatabase.password === password) {
            response = emailInDatabase;
        } else {
            error = "Email or password incorrect"
        }

        res.json({
            success: !error ? true : false,
            response,
            error
        })
        
    }
}

module.exports = usersControllers;