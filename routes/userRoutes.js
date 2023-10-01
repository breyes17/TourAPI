const express = require('express');
const {
  addUser,
  deleteUser,
  getUser,
  updateUser,
  checkUserDetails,
} = require('../controller/userController');

const router = express.Router();

router.route('/').post(checkUserDetails, addUser).patch(updateUser);
router.route('/:id').get(getUser).delete(deleteUser);

module.exports = router;
