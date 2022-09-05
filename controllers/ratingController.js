const Rating = require("../models/Rating");

class RatingController {
  async postRating (req, res) {
    try {
    const {username, kinopoiskId, ratingFilm} = req.body;
    const rating = new Rating({username, kinopoiskId, ratingFilm})
    rating
    .save()
    .then((result) => console.log('Rating was successfully created'))
    .catch((e) => console.error(e))
    } catch (e) {
      console.error(e)
    }
  }
  
  async getRating (req, res) {
    try {
      const ratings = await Rating.find()
      return res.json(ratings)
    } catch (e) {
      console.log(e)
    }
  }
  
  async getUserRating (req, res) {
    try {
      const {username} = req.body;
      const ratings = await Rating.find({ username })
      return res.json(ratings)
    } catch (e) {
      console.log(e)
    }
  }
  
  async updateRating (req, res) {
    try {
      const {ratingFilm} = req.body;
      const {id} = req.params;
      const rating = await Rating.findByIdAndUpdate(id, {ratingFilm})
      return res.json(rating)
    }
    catch (e) {
      console.log(e)
    }
  }
}

module.exports = new RatingController();