const express = require('express')
const { getLivre, postLivre } = require('../controller/livre')

const router = express.Router()

router.route("/")
.get(getLivre)
.post(postLivre)

module.exports = router