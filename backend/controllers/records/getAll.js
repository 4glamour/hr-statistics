const { endOfDay, startOfDay } = require('date-fns');
const { Record } = require('../../models/record');

const getAll = async (req, res, next) => {
  const records = await Record.find({
    createdAt: {
      $gte: startOfDay(new Date()),
      $lte: endOfDay(new Date()),
    },
  }).populate('category', 'name type');

  res.json({
    result: records,
  });
};

module.exports = getAll;
