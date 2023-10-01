const express = require('express');

const app = express();

app.use(express.json()); // to access the json in req.body

const savingRouter = express.Router();

app.use('/api/v1/savings', savingRouter);

module.exports = app;
