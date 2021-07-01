const express = require('express');
const apiRouter = require('./routers/api')
const imageRouter = require('./routers/image')
const router = express.Router();

router.use('/', apiRouter)
router.use('/image', imageRouter)

module.exports = router
