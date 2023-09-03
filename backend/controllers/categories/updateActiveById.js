const { Category } = require('../../models/category');

const updateActiveById = async (req, res, next) => {
  const { categoryId } = req.params;

  const result = await Category.findByIdAndUpdate(categoryId, req.body, { new: true });

  res.status(200).json({
    result,
  });
};

module.exports = updateActiveById;
