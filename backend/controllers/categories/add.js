const { Category } = require('../../models/category');

const add = async (req, res, next) => {
  const newCategory = await Category.create({
    ...req.body,
  });

  res.status(201).json({
    result: newCategory,
  });
};

module.exports = add;
