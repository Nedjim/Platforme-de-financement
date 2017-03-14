const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  	res.send(`you did not give any amount :(`);
  	next();
});

module.exports = router;