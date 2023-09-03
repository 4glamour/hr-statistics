const { ctrlWrapper } = require('../../middlewares');
const getAll = require('./getAll');
const add = require('./add');
const removeById = require('./removeById');

module.exports = {
  getAll: ctrlWrapper(getAll),
  add: ctrlWrapper(add),
  removeById: ctrlWrapper(removeById),
};
