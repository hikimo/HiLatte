const express = require('express')
const router = express.Router()

// Controllers
const { testController } = require('../controllers')

router.get('/', testController.index)

module.exports = router