const express = require('express');

const userRoute = Task => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send('users-page');
  });

  return router;
};

module.exports = userRoute;
