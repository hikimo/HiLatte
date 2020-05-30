const express = require('express')

function index(req, res) {
  res.status(200).render('index', { title: 'Hilate' })
}

module.exports = {
  index
}