const express = require('express');

const router = require('./MainRouter');

const server = express();

server.use(express.json());

server.use('/recipes', router)

server.listen(8000, () => console.log('Listening on Port 8000'))