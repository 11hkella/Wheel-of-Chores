const express = require('express')

const ChoreApi = require('../models/chore.js')
const MemberApi = require('../models/member.js')
const ChoreRouter = express.Router()

//get All
ChoreRouter.get('/', (req, res) => {
  ChoreApi.getAllChores()
    .then((allChores) => {
      return res.render('chore/allChores', { allChores })
    })
})
//create
ChoreRouter.get('/create', (req, res) => {
  res.render('chore/createChore', { memberId: req.query.memberId })
})
ChoreRouter.post('/', async (req, res) => {
  const member = await MemberApi.getOneMember(req.query.memberId)
  ChoreApi.createChore(req.body)
    .then(() => {
      return res.redirect(`/wheel/${member.wheelId}`)
    })
})
//mark chore as done
ChoreRouter.put('/udate/completed/:id', async (req, res) => {
  const selectedChore = await ChoreApi.getOneChore(req.params.id)
  const member = await MemberApi.getOneMember(selectedChore.memberId)
  await ChoreApi.updateChore(req.params.id, { completed: true })
  return res.redirect(`/wheel/${member.wheelId}`)
})
//update
ChoreRouter.get('/update/:id', (req, res) => {
  ChoreApi.getOneChore(req.params.id)
    .then((selectedChore) => {
      res.render('chore/updateChore', { selectedChore })
    })
})
ChoreRouter.put('/:id', async (req, res) => {
  const chore = await ChoreApi.getOneChore(req.params.id)
  const member = await MemberApi.getOneMember(chore.memberId)
  await ChoreApi.updateChore(req.params.id, req.body)
  return res.redirect(`/wheel/${member.wheelId}`)
})
//delete
ChoreRouter.delete('/:id', async (req, res) => {
  const selectedChore = await ChoreApi.getOneChore(req.params.id)
  const member = await MemberApi.getOneMember(selectedChore.memberId)
  await ChoreApi.deleteChore(req.params.id)
  return res.redirect(`/wheel/${member.wheelId}`)

  // ChoreApi.getOneChore(req.params.id)
  //   .then((selectedChore) => {
  //     const memberId = selectedChore.memberId
  //     ChoreApi.deleteChore(req.params.id)
  //       .then(() => {
  //         return res.redirect(`/member/${memberId}`)
  //       })
  //   })
})
//get one
ChoreRouter.get('/:id', (req, res) => {
  ChoreApi.getOneChore(req.params.id)
    .then((selectedChore) => {
      return res.render('chore/selectedChore', { selectedChore })
    })
})

module.exports = {
  ChoreRouter
}
