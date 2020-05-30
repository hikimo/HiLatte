const express = require('express')
const router = express.Router()

// Route for 404 page
router.use((req, res, next) => {
  res.status(404).render('404', { title: 'Page Not Found' })
})

module.exports = router