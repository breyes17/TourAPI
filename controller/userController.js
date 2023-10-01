exports.addUser = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      username: req.body.username,
      name: req.body.name,
    },
  });
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

exports.checkUserDetails = (req, res, next) => {
  if (!req.body.name) {
    return res.status(404).json({
      status: 'fail',
      message: 'Name is required',
    });
  }

  next();
};
