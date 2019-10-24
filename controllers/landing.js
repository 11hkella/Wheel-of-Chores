const express = require('express')
const LandingRouter = express.Router()

// get landing
LandingRouter.get('/', (req, res) => {
  res.render('landing')
})

module.exports = {
  LandingRouter
}