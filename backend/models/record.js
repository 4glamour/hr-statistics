const { Schema, model } = require('mongoose');

const recordSchema = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Record = model('record', recordSchema);

module.exports = {
  Record,
};
