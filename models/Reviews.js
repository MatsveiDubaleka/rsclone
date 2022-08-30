const {Schema, model} = require('mongoose')

const Reviews = new Schema ({
  author: {type: String, required: true},
  text: {type: String, required: true, unique: true},
  title: {type: String, required: true, unique: true},
  type: {type: String, required: true},
  date: {type: String},
}, {timestamps: true})

module.exports = model('Reviews', Reviews)