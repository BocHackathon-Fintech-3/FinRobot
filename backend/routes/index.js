const router = require('express').Router(),
    boom = require('boom');

router.use('/user/auth', require('./user/auth'));
router.use('/user/home', require('./user/home'));
router.use('/user/general', require('./user/general'));
router.use('/user/invest', require('./user/invest'));

// catch 404 and forward to error handler
router.use((req, res, next) => {
    next(boom.notFound())
});

router.use((err, req, res, next) => {
    if(err.isJoi) {
        err = boom.badRequest(err.details[0].message);
    }
    
    return res.status(err.output.statusCode).send(err.message)
})

module.exports = router;