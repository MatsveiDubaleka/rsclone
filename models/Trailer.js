const {Schema, model} = require('mongoose')

const Trailer = new Schema ({
  nameEn: {type: String, required: true},
  nameRu: {type: String, required: false},
})

module.exports = model('Trailer', Trailer)