const express = require('express')
const app = express();
const router = require('./routes');
const logger = require('morgan');
const db = require('./database');

const User = require('./models/userModel');
//midleware
app.use(express.json())
app.use(logger('dev'))

//routes
app.use(router)



//start
db.connect().then(() => {
    app.listen(3000, (req, res) => {
        console.log("server is running");

    })
})