const {Schema, model} = require('mongoose')

const Rating = new Schema ({
  username: {type: String, required: true},
  kinopoiskId: {type: Number, required: true},
  ratingFilm: {type: Number, required: true},
})

module.exports = model('Rating', Rating)