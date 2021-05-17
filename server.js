const express = require('express');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();
require('./config/database');
const router = require('./routes/index');
require('./config/passport')


const app = express();

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

app.listen(port, host, () => {
    console.log(`App listening on port ${port} on ${host}`)
})


/*
git push origin master
git push heroku master
*/