const router = require('express').Router();
const userRoutes = require('./userRoutes');

//routes
router.use('/users', userRoutes)


//error handling
router.use((req, res, next) => {
    const err = new Error("404 Page not found")
    res.status(404)
    next(err)
})

router.use((err, req, res, next) => {
    res.status(req.statusCode || 500)
    const message = err.message || "internal server error"
    res.json({
        message: message
    })
})

module.exports = router