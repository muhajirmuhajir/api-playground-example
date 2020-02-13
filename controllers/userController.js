const User = require('../models/userModel');
const mongoose = require('mongoose');

exports.get_all_users = (req, res, next) => {

    res.json({
        message: "get all users"
    })
}

exports.create_user = (req, res, next) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    })

    User.create(newUser).then((result) => {
            res.json({
                message: result
            })
        })
        .catch((err) => {
            res.status(406)
            res.send({
                message: "create failed"
            })
        })

}