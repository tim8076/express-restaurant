const mongoose = require('mongoose');

const reserveSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, '姓名欄位為必填'],
  },
  phone: {
    type: Number,
    required: [true, '電話欄位為必填'],
  },
  email: {
    type: String,
    required: [true, 'Email欄位為必填'],
  },
  peopleNum: {
    type: Number,
    required: [true, '人數欄位為必填'],
  },
  veg: {
    type: String,
    defalut: '否'
  }
})

module.exports = new mongoose.model('Reserve', reserveSchema);