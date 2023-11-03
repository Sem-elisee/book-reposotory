const express =  require("express")
const { getUser, postUser } = require('../controller/register')
const router = express.Router()

router.route("/")
    .get(getUser)
    .post(postUser)

module.exports = router