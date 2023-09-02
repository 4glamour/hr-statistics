const { Category } = require('../../models/category');

const getAll = async (req, res, next) => {
  const categories = await Category.find();

  res.json({
    result: categories,
  });
};

module.exports = getAll;
