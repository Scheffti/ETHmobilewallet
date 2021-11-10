const express = require('express');

const authRoutes = require('./auth_routes');
const userRoutes = require('./user_routes');
const transactionRoutes = require('./transaction_routes');
const transactionController = require('../../controllers/transaction_controller');

const router = express.Router();
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers,Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Credentials", false);
  next();
});

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/transactions', transactionRoutes);

router.route('/addresses/:address_id/transactions')
  .get(transactionController.getAddressTransactions);

router.route('/blocks/:block_number_or_hash')
  .get(transactionController.getBlockWithTransactions);


module.exports = router;
