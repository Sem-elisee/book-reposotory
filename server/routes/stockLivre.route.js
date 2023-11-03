const express = require('express')
const {  postStockLivre, getStockLivre,deleteStockLivre } = require('../controller/stockLivre')

const router = express.Router()

router.route("/")
.get(getStockLivre)
.post(postStockLivre)
.delete(deleteStockLivre)

module.exports = router