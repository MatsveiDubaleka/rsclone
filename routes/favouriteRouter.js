const Router = require('express')
const router = new Router();
const favouriteController = require('../controllers/favouriteController')

router.get('/getFavourites', favouriteController.getFavourite)
router.get('/getFavourites/username/:username', favouriteController.getFavouriteUserByName)
router.post('/postFavourite', favouriteController.postFavourite)
router.get('/getFavourites/id/:id', favouriteController.getFavouriteUserByID)
router.delete('/deleteFavourite/:id', favouriteController.removeFavourite)

module.exports = router;