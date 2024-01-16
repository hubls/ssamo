const express = require('express');
const router = express.Router();

router.get('/webtoons', (req, res) => {
  res.send('test');
});

module.exports = router;