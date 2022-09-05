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
  
  async getFavouriteUserByName (req, res) {
    try {
      const {username} = req.params;
      const favourite = await Favourite.find({ username })
      res
      .status(200)
      .json(favourite)
    } catch (e) {
      console.log('You have error', e.message)
    }
  }
  
  async getFavouriteUserByID (req, res) {
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
      const favourite = await Favourite.findByIdAndDelete(id)
      return res.json(`Film was successfully deleted`)
    } catch (e) {
      console.log('You have error', e.message)
    }
  }
}

module.exports = new FavouriteController()