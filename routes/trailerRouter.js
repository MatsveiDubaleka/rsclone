const Router = require('express')
const router = new Router();
const trailer = require('../controllers/trailerController')

router.get('/getTrailer', trailer.getTrailer)
router.post('/postTrailer', trailer.setTrailer)

module.exports = router;