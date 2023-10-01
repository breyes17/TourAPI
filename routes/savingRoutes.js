const express = require('express');

const router = express.Router();

exports.getAllSavings = (req, res, next) => {
  res.status(200).json({
    status: 'Success',
    message: 'get all savings data',
  });
};
