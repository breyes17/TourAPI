exports.getAllSavings = (req, res) => {
  res.status(200).json({
    status: 'Success',
    message: 'get all savings data',
  });
};

exports.addSaving = (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      data: req.body,
    },
  });
};

exports.updateSaving = (req, res) => {
  console.log({ id: req.params.id });
  res.status(200).json({
    status: 'success',
    data: {
      data: req.body,
    },
  });
};

exports.deleteSaving = (req, res) => {
  console.log({ id: req.params.id });
  res.status(200).json({
    status: 'success',
    data: {
      data: req.params.id,
    },
  });
};

exports.checkBody = (req, res, next) => {
  if (!req.body.amount) {
    return res.status(404).json({
      status: 'fail',
      data: {
        message: 'Amount is required',
      },
    });
  }

  next();
};
