const express = require('express')
const { getEmprunt, postEmprunt } = require('../controller/emprunt')

const router = express.Router()

router.route('/')
.get(getEmprunt)
.post(postEmprunt)

module.exports = router

