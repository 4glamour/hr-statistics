const express = require('express');

const { users: ctrl } = require('../../controllers');

const { validation, authenticate } = require('../../middlewares');

const { schemas } = require('../../models/user');

const router = express.Router();

router.post('/register', validation(schemas.registerSchema), ctrl.register);

router.post('/login', validation(schemas.loginSchema), ctrl.login);

router.post('/logout', authenticate, ctrl.logout);

router.get('/current', authenticate, ctrl.getCurrent);

module.exports = router;
