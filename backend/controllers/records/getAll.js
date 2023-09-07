const { endOfDay, startOfDay } = require('date-fns');
const { Record } = require('../../models/record');

const getAll = async (req, res, next) => {
  const today = new Date();
  const { date = today } = req.query;

  const records = await Record.find({
    createdAt: {
      $gte: startOfDay(new Date(date)),
      $lte: endOfDay(new Date(date)),
    },
  }).populate('category', 'name type');

  res.json({
    result: records,
  });
};

module.exports = getAll;
