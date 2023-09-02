const express = require('express');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();

const categoryRouter = require('./routes/api/category');
const recordRouter = require('./routes/api/record');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/categories', categoryRouter);
app.use('/api/records', recordRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;

  res.status(status).json({ message });
});

module.exports = app;
