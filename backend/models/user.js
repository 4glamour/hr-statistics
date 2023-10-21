const { Schema, model } = require('mongoose');
const Joi = require('joi');
const handleSchemaValidationErrors = require('../helpers/handleSchemaValidationErrors');

const emailRegex = /^\w+(\.?\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: emailRegex,
      unique: true,
    },
    password: {
      type: String,
      minLength: 6,
    },
    token: {
      type: String,
      default: '',
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', handleSchemaValidationErrors);

const registerSchema = Joi.object({
  email: Joi.string()
    .trim()
    .empty()
    .pattern(emailRegex, { name: 'email pattern' })
    .required()
    .messages({
      'string.base': 'Email should be a string',
      'string.empty': 'Email should not be an empty field.',
      'any.required': 'Email is required.',
      'string.pattern.base': 'Email must be in format of test@mail.com.',
    }),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .trim()
    .empty()
    .pattern(emailRegex, { name: 'email pattern' })
    .required()
    .messages({
      'string.base': 'Email should be a string',
      'string.empty': 'Email should not be an empty field.',
      'any.required': 'Email is required.',
      'string.pattern.base': 'Email must be in format of test@mail.com.',
    }),
  password: Joi.string().required(),
});

const schemas = {
  registerSchema,
  loginSchema,
};

const User = model('user', userSchema);

module.exports = { User, schemas };
