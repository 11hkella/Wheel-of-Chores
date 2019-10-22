const express = require('express')

const MemberApi = require('../models/member.js')
const ChoreApi = require('../models/chore.js')
const MemberRouter = express.Router()

//get All
MemberRouter.get('/', (req, res) => {
  MemberApi.getAllMembers()
    .then((allMembers) => {
      return res.render('member/allMembers', { allMembers })
    })
})
//create
MemberRouter.get('/create/:wheelId', (req, res) => {
  res.render('member/createMember', { wheelId: req.params.wheelId })
})
MemberRouter.post('/:wheelId', (req, res) => {
  MemberApi.createMember(req.body)
    .then(() => {
      return res.redirect(`/wheel/${req.params.wheelId}`)
    })
})
//update
MemberRouter.get('/update/:id', (req, res) => {
  MemberApi.getOneMember(req.params.id)
    .then((selectedMember) => {
      res.render('member/updateMember', { selectedMember })
    })
})
MemberRouter.put('/:id', (req, res) => {
  Promise.all([MemberApi.updateMember(req.params.id, req.body), MemberApi.getOneMember(req.params.id)])
    .then(([updateInfo, selectedMember]) => {
      return res.redirect(`/wheel/${selectedMember.wheelId}`)
    })
})
//delete
MemberRouter.delete('/:id', (req, res) => {
  MemberApi.getOneMember(req.params.id)
    .then((selectedMember) => {
      const wheelId = selectedMember.wheelId
      MemberApi.deleteMember(req.params.id)
        .then(() => {
          return res.redirect(`/wheel/${wheelId}`)
        })
    })
})
//get one
MemberRouter.get('/:id', (req, res) => {
  Promise.all([MemberApi.getOneMember(req.params.id), ChoreApi.findChoresByMemberId(req.params.id)])
    .then(([selectedMember, chores]) => {
      return res.render('member/selectedMember', { selectedMember, chores })
    })
})

module.exports = {
  MemberRouter
}
