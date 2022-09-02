const {Schema, model} = require('mongoose')

const Reviews = new Schema ({
  kinopoiskId: {type: Number, required: true},
  author: {type: String, required: true},
  text: {type: String, required: true},
  title: {type: String, required: true},
  type: {type: String, required: true},
  date: {type: String},
}, {timestamps: true})

module.exports = model('Reviews', Reviews)