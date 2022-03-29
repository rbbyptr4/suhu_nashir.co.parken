const express = require("express")
const router = express.Router()
const UserController = require('../controller/user')

router.post('/createUser', UserController.createUser)
router.get('/getUser',UserController.getUser)

module.exports = router