const {Schema, model} = require('mongoose')

const User = new Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  roles: [{type: String, ref: 'Role'}],
  watchlist:[{kinopoiskId: {type: Number, default: 0}}],
  favouriteFilms: [{kinopoiskId: {type: Number, default: 0}}],
  ratingFilms: [{
    kinopoiskId: {type: Number, default: 0},
    ratingFilm: {type: Number, default: 0}
  }]
})

module.exports = model('User', User)