const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      default: 'no phone number',
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Category = model('category', categorySchema);

module.exports = {
  Category,
};
