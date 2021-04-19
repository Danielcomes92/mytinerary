require('dotenv').config();
require('./config/database');
const express = require('express');
const cors = require('cors');
const router = require('./routes/index');

const app = express();
const port = 4000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

app.listen(port, () => {
    console.log(`Listening port ${port}`)
})