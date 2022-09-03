const Reviews = require("../models/Reviews");

class ReviewsController {
  async postReview(req, res) {
    try {
      const {kinopoiskId, title, author, text, type} = req.body
      const review = new Reviews({kinopoiskId, title, author, text, type, date: (new Date()).toLocaleString()})
      review
      .save()
      .then((result) => res.send(`Review was succesfully created, \n ${result}`))
      .catch((e) => console.error(e))
    } catch (e) {
      console.error(e)
    }
  }
  
  async getReviews(req, res) {
    try {
      const reviews =await Reviews.find()
      res.json(reviews)
    } catch (e) {
      console.error(e)
    }
  }
}

module.exports = new ReviewsController()