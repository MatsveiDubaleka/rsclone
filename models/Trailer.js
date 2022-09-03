const {Schema, model} = require('mongoose')

const Trailer = new Schema ({
  nameEn: {type: String, required: true},
  nameRu: {type: String, required: false, default: 'null'},
})

module.exports = model('Trailer', Trailer)