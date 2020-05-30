const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({
    status: 200,
    msg: 'Test API oke'
  })
})

module.exports = router