const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.get('/', transactionController.getTransactions);
router.post('/load-data', transactionController.loadData);

module.exports = router;
