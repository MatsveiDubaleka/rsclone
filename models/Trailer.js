const {Schema, model} = require('mongoose')

const Trailer = new Schema ({
  nameEn: {type: String, required: true},
})

module.exports = model('Trailer', Trailer)