const express = require('express');
const { categories: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', ctrl.getAll);
router.post('/', ctrl.add);
router.patch('/:categoryId', ctrl.updateActiveById);

module.exports = router;
