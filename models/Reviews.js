const {Schema, model} = require('mongoose')

const Reviews = new Schema ({
  kinopoiskId: {type: Number, required: true},
  author: {type: String, required: true},
  description: {type: String, required: true, unique: true},
  title: {type: String, required: true, unique: true},
  type: {type: String, required: true},
  date: {type: String},
}, {timestamps: true})

module.exports = model('Reviews', Reviews)