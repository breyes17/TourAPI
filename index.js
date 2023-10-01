const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const savingRouter = require('./routes/savingRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json()); // to access the json in req.body

app.use('/api/v1/savings', savingRouter);
app.use('/api/v1/user', userRouter);

module.exports = app;
