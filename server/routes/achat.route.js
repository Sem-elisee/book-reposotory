const express = require('express')
const {getAchat, postAchat} = require('../controller/achat')

const router = express.Router()

router.route('/')

.get(getAchat)
.post(postAchat)

module.exports = router