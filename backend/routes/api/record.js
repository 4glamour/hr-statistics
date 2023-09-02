const express = require('express');
const { records: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', ctrl.getAll);
router.post('/', ctrl.add);

module.exports = router;
