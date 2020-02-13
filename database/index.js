const mongoose = require('mongoose');

exports.connect = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb://localhost/example-api", {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            })
            .then((res, err) => {
                if (err) return reject(err)
                resolve()
            })
            .catch((err) => {
                return reject(err)
            })
    })
}

exports.disconnect = () => {
    return mongoose.disconnect();
}