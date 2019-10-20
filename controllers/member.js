const express = require('express')

const MemberApi = require('../models/member.js')
const MemberRouter = express.Router()

//get All
MemberRouter.get('/', (req, res) => {
  MemberApi.getAllMembers()
    .then((newMember) => {
      return res.json(newMember)
    })
})
//create
MemberRouter.post('/', (req, res) => {
  MemberApi.createMember(req.body)
    .then((newMember) => {
      return res.json(newMember)
    })
})
//update
MemberRouter.put('/:id', (req, res) => {
  MemberApi.updateMember(req.params.id, req.body)
    .then((newMember) => {
      return res.json(newMember)
    })
})
//delete
MemberRouter.delete('/:id', (req, res) => {
  MemberApi.deleteMember(req.params.id)
    .then((newMember) => {
      return res.json(newMember)
    })
})
//get one
MemberRouter.get('/:id', (req, res) => {
  MemberApi.getOneMember(req.params.id)
    .then((newMember) => {
      return res.json(newMember)
    })
})

module.exports = {
  MemberRouter
}
