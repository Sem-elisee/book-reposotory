const express = require('express')
const {postLogout, getLogout} = require('../controller/logout')

const router = express.Router()

router.route('/')
.post(postLogout)
.get(getLogout)


module.exports = router