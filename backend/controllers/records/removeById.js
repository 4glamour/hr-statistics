const { Record } = require('../../models/record');

const removeById = async (req, res, next) => {
  const { recordId } = req.params;

  const result = await Record.findByIdAndRemove(recordId);

  res.status(200).json({
    result,
  });
};

module.exports = removeById;
