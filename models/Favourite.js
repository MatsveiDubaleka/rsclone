const {Schema, model} = require('mongoose')

const Favourite = new Schema ({
  username: {type: String, required: true},
  kinopoiskId: {type: Number, required: true},
})

module.exports = model('Favourite', Favourite)