const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    email: {
        type: String,
        index: true,
        unique: true
    },
    cars: [{
        type: Schema.Types.ObjectId,
        ref: 'car'
    }]
})

module.exports = mongoose.model('user', userSchema);