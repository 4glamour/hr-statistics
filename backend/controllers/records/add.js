const { Record } = require('../../models/record');

const add = async (req, res, next) => {
  const { _id } = await Record.create({
    ...req.body,
  });

  const createdRecord = await Record.findById(_id).populate('category', 'name type');

  res.status(201).json({
    result: createdRecord,
  });
};

module.exports = add;
