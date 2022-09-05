const Router = require('express')
const router = new Router();
const ratingController = require('../controllers/ratingController')

router.post('/postRating', ratingController.postRating)
router.get('/getRating', ratingController.getRating)
router.post('/getUserRating', ratingController.getUserRating)
router.put('/updateRating/:id', ratingController.updateRating)

module.exports = router;