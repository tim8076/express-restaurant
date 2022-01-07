const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: {
      values: ['chips', 'drinks', 'hamburger'],
      message: '{VALUE} is not supported'
    }
  }
})

module.exports = mongoose.model('Product', productSchema);