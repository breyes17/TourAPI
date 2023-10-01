const express = require('express');
const {
  getAllSavings,
  addSaving,
  deleteSaving,
  updateSaving,
  checkBody,
} = require('../controller/savingController');

const router = express.Router();

router.route('/').get(getAllSavings).post(checkBody, addSaving);

router.route('/:id').patch(updateSaving).delete(deleteSaving);

module.exports = router;
