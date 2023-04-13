const express = require('express');
const cars = require('./data/cars.json', {assert: {type: `json`}});
const users = require('./data/users.json', {assert: {type: `json`}});

const PORT = 5006;
const app = express();

app.get('/api/ping', (req, res) => {
  res.json({message: 'OK'});
});

app.get('/api/cars', (req, res) => {
  res.send({cars});
});

app.get('/api/users', (req, res) => {
  res.send({users});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
