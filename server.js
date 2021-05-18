const express = require('express');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();
require('./config/database');
const router = require('./routes/index');
require('./config/passport')
const path = require('path')


const app = express();

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)


if(process.env.NODE_END === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,  "build", "index.html"));
        // res.sendFile(path.join(__dirname+ "/client/build/index.html"))
    })
}

app.listen(port, host, () => {
    console.log(`App listening on port ${port} on ${host}`)
})


/*
git push origin master
git push heroku master
///


now ->>>
git add . 
git commit -m 'ready to host'

git push origin master
git push heroku master
*/