const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { text: 'My - App' });
});

module.exports = router;
