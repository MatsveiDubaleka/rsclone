const Router = require('express')
const router = new Router();
const favouriteController = require('../controllers/favouriteController')

router.get('/getFavourites', favouriteController.getFavourite)
router.get('/getFavourites/:id', favouriteController.getFavouriteUser)
router.post('/postFavourite', favouriteController.postFavourite)
router.delete('/deleteFavourite/:id', favouriteController.removeFavourite)

module.exports = router;