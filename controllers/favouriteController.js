const Favourite = require('../models/Favourite')

class FavouriteController {
  async postFavourite (req, res) {
    try {
      const {username, kinopoiskId} = req.body;
      const favourite = new Favourite({username, kinopoiskId})
      favourite.save()
      res
      .status(200)
      .json(favourite)
    } catch (e) {
      console.log('You have error', e.message)
    }
  }
  
  async getFavourite (req, res) {
    try {
      const favourite = await Favourite.find()
      res
      .status(200)
      .json(favourite)
    } catch (e) {
      console.log('You have error', e.message)
    }
  }
  
  async getFavouriteUser (req, res) {
    try {
      const {id} = req.params;
      const favourite = await Favourite.findOne({ id })
      res
      .status(200)
      .json(favourite)
    } catch (e) {
      console.log('You have error', e.message)
    }
  }
  
  async removeFavourite (req, res) {
    try {
      const {id} = req.params;
      const favourite = await Favourite.findOneAndDelete({id})
      return res.json(`Film was successfully deleted ${favourite}`)
    } catch (e) {
      console.log('You have error', e.message)
    }
  }
}

module.exports = new FavouriteController()