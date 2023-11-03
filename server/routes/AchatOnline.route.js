const express = require('express')
const { getAchatOnline, postAchatOnline } = require('../controller/achat_online')

const router = express.Router()

router.route('/')
.get(getAchatOnline)
.post(postAchatOnline)

module.exports = router