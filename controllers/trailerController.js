const modelTrailer = require('../models/Trailer')

class Trailer {
  async getTrailer(req, res) {
    try {
      const trailers =await modelTrailer.find()
      res.json(trailers)
    } catch (e) {
      console.error(e)
    }
  }
  async setTrailer(req, res) {
    try {
      const {nameEn} = req.body
      const trailer = new modelTrailer({nameEn})
      trailer
      .save()
      .then((result) => res.status(200).send('Trailers were succesfully done'))
      .catch((e) => console.error(e))
    } catch (e) {
      console.error(e)
    }
  }
}

module.exports = new Trailer()