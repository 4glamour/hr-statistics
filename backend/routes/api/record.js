const express = require('express');
const { records: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', ctrl.getAll);
router.post('/', ctrl.add);
router.delete('/:recordId', ctrl.removeById);

module.exports = router;
