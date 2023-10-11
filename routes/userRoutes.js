const express = require('express');
const {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} = require('../controller/userController');

const router = express.Router();

router.route('/').post(addUser).patch(updateUser);
router.route('/:id').get(getUser).delete(deleteUser);

module.exports = router;
