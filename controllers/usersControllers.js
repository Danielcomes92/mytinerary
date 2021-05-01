const User = require('../models/User');
const bcryptjs = require('bcryptjs');

const jwt = require('jsonwebtoken');

const usersControllers = {

    addUser: async(req, res) => {
        let { email, password } = req.body;
        const userDb = await User.findOne({email});
        password = bcryptjs.hashSync(password, 10)
        
        let response;
        let error;
        let userSaved;
        
        if(!userDb) {
            try {
                userSaved = new User({...req.body, password});
                await userSaved.save();

                //tokenizamos el usuario
                //el metodo sign de jwt toma dos parametros, el objeto a tokenizar y la palabra clave
                const token = jwt.sign({...userSaved}, process.env.SECRET_OR_KEY);
                response = token;
            } catch (error) {
                error
            }
        } else {
            error = "Email is already used";
        }
        // console.log(error)
        res.json({
            success: !error ? true : false,
            //la respuesta al front va a ser; el usuario completo tokenizado, y las propiedades picture/firstname sin tokenizar
            response: response && {token: response, urlPic: userSaved.urlPic, firstName: userSaved.firstName},
            error
        })
    },

    logUser: async (req, res) => {
        const { email, password } = req.body;
        
        let response;
        let error;
        let userDb;
                
        try {
            userDb = await User.findOne({email});
            //si el find anterior me arrojo alguna coincidencia y ademas el password guardado en ese usuario y el que recibi por el body es igual va a entrar aca
            if(userDb && bcryptjs.compareSync(password, userDb.password)) {
                //como tanto al logearse, como al crear un usuario, lo alojamos en localstorage, es necesario tokenizar ambos procesos para que solo sea visible lo que no genere
                //un problema de seguridad, y de igual manera, lo que sea necesario mantener oculto enviarlo tokenizado
                const token = jwt.sign({...userDb}, process.env.SECRET_OR_KEY);
                response = token;
            } else {
                error = "Email or password incorrect"
            }
        } catch (error) {
            error = "Internal database error"
        }       

        console.log(error)
        res.json({
            success: !error ? true : false,
            //la respuesta al front va a ser; el usuario completo tokenizado, y las propiedades picture/firstname sin tokenizar
            response: response && {token: response, urlPic: userDb.urlPic, firstName: userDb.firstName},
            error
        })
    },

    loginWithLS: (req, res) => {
        res.json({
            success: true,
            response: {urlPic: req.user.urlPic, firstName: req.user.firstName}
        })
    }
}

module.exports = usersControllers;