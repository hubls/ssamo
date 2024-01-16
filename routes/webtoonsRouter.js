const express = require('express');
const router = express.Router();

router.get('/webtoons', (req, res) => {
  res.send('안녕');
});

module.exports = router;