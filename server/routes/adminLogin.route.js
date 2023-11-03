const express =  require('express')
const {getAdminLogin, postAdminLogin} = require('../controller/adminLogin')

const router = express.Router()

router.route('/')
.get(getAdminLogin)
.post(postAdminLogin)


module.exports = router