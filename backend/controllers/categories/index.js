const { ctrlWrapper } = require('../../middlewares');

const getAll = require('./getAll');
const add = require('./add');
const updateActiveById = require('./updateActiveById');

module.exports = {
  getAll: ctrlWrapper(getAll),
  add: ctrlWrapper(add),
  updateActiveById: ctrlWrapper(updateActiveById),
};
