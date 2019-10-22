const express = require('express')

const WheelApi = require('../models/wheel.js')
const MemberApi = require('../models/member.js')
const ChoreApi = require('../models/chore.js')
const WheelRouter = express.Router()

//get All
WheelRouter.get('/', (req, res) => {
  WheelApi.getAllWheels()
    .then((allWheels) => {
      return res.render('wheels/template', { allWheels })
    })
})
//create
WheelRouter.get('/create', (req, res) => {
  res.render('wheels/createTemplate')
})
WheelRouter.post('/', (req, res) => {
  WheelApi.createWheel(req.body)
    .then(() => {
      return res.redirect('/wheel')
    })
})
//update
WheelRouter.get('/update/:id', (req, res) => {
  WheelApi.getOneWheel(req.params.id)
    .then((selectedWheel) => {
      res.render('wheels/editFormTemplate', { selectedWheel })
    })
})
WheelRouter.put('/:id', (req, res) => {
  WheelApi.updateWheel(req.params.id, req.body)
    .then((newWheel) => {
      return res.redirect('/wheel')
    })
})
//delete
WheelRouter.delete('/:id', (req, res) => {
  WheelApi.deleteWheel(req.params.id)
    .then((newWheel) => {
      return res.redirect("/wheel")
    })
})
//get one
WheelRouter.get('/:id', (req, res) => {
  Promise.all([WheelApi.getOneWheel(req.params.id), MemberApi.findMembersByWheelId(req.params.id)])
    .then(([selectedWheel, members]) => {
      return res.render("wheels/oneWheel", { selectedWheel, members })
    })
})

module.exports = {
  WheelRouter
}
