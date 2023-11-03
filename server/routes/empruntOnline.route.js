const express = require('express')
const { getEmpruntOnline, postEmpruntOnline } = require('../controller/emprunt_online')

const router = express.Router()

router.route('/')
.get(getEmpruntOnline)
.post(postEmpruntOnline)

module.exports = router