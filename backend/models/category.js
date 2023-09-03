const { Schema, model } = require('mongoose');
const handleSchemaValidationErrors = require('../helpers/handleSchemaValidationErrors');

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

categorySchema.post('save', handleSchemaValidationErrors);

const Category = model('category', categorySchema);

module.exports = {
  Category,
};
