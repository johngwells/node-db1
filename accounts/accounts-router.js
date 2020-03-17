const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('accounts crud here');
});

module.exports = router;