const { UserModel } = require('../model/userModel');

exports.addUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json({
      status: 1,
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 0,
      data: {
        error,
      },
    });
  }
};

exports.getUser = (req, res) => {
  console.log({ userId: req.params.id });
  res.status(200).json({
    status: 'success',
    data: {
      id: req.params.id,
    },
  });
};

exports.deleteUser = (req, res) => {
  console.log({ userId: req.params.id });
  res.status(200).json({
    status: 'success',
    data: {
      id: req.params.id,
    },
  });
};

exports.updateUser = (req, res) => {
  const { id, username, name } = req.body;
  res.status(200).json({
    status: 'success',
    data: {
      id,
      username,
      name,
    },
  });
};

// exports.checkUserDetails = (req, res, next) => {
//   if (!req.body.name) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Name is required',
//     });
//   }

//   next();
// };
