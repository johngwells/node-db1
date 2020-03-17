const express = require("express");

const accountsRouter = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

module.exports = server;
