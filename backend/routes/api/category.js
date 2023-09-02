const express = require('express');
const { categories: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', ctrl.getAll);
router.post('/', ctrl.add);

module.exports = router;
