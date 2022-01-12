const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.render('signIn/signIn');
});

module.exports = router;