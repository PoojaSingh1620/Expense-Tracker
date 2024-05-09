const express = require("express");
const {
  getAllTransaction,
  addTransaction,
  editTransaction,
  deleteTransaction
} = require("../controllers/transactionCtrl");

//router object
const router = express.Router();

//routes
//add transaction POST Method
router.post("/add-transaction", addTransaction);

//Edit transaction POST Method
router.post("/edit-transaction", editTransaction);
//delete transaction POST Method
router.post("/delete-transaction", deleteTransaction);
// transaction POST  Method
router.post("/get-transaction", getAllTransaction);

module.exports = router;
