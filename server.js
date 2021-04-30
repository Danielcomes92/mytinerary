const express = require('express');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();
require('./config/database');
const router = require('./routes/index');
require('./config/passport')


const app = express();
const port = 4000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

app.listen(port, () => {
    console.log(`Listening port ${port}`)
})