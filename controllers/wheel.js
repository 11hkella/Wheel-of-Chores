const express = require('express')

const WheelApi = require('../models/wheel.js')
const WheelRouter = express.Router()

//get All
WheelRouter.get('/', (req, res) => {
  WheelApi.getAllWheels()
    .then((allWheels) => {
      return res.render('wheels/template', { allWheels })
    })
})
//create
WheelRouter.post('/', (req, res) => {
  WheelApi.createWheel(req.body)
    .then((newWheel) => {
      return res.json(newWheel)
    })
})
//update
WheelRouter.put('/:id', (req, res) => {
  WheelApi.updateWheel(req.params.id, req.body)
    .then((newWheel) => {
      return res.json(newWheel)
    })
})
//delete
WheelRouter.delete('/:id', (req, res) => {
  WheelApi.deleteWheel(req.params.id)
    .then((newWheel) => {
      return res.json(newWheel)
    })
})
//get one
WheelRouter.get('/:id', (req, res) => {
  WheelApi.getOneWheel(req.params.id)
    .then((selectedWheel) => {
      return res.render("wheels/oneWheel", { selectedWheel })
    })
})

module.exports = {
  WheelRouter
}
