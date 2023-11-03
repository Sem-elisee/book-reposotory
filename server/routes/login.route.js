const express =  require('express')
const {getLogin, postLogin} = require('../controller/login')

const router = express.Router()

router.route('/')
.get(getLogin)
.post(postLogin)


module.exports = router