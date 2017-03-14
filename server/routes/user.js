const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  	res.send(`welcome to your dashboard mate ;)`);
  	next()
});

module.exports = router;