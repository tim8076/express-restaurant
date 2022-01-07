const express = require('express');
const router = express.Router();
const Reserve = require('../model/reserve');

// 泫染首頁
router.get('/', (req, res) => {
  res.render('index');
})

// 顧客訂位
router.post('/reserve', async (req, res) => {
  const { name, phone, email, peopleNum, veg } = req.body;
  const reservation = {
    name,
    phone,
    email,
    peopleNum,
    veg,
  }
  try {
    const newReservation = await Reserve.create(reservation);
    res.render('reservation/reserve', {
      reservation
    });
  } catch {
    res.render('index', {
      reservation,
      errorMessage: '欄位未填寫完畢'
    })
  }
})

module.exports = router;