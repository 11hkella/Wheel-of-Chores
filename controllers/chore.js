const express = require('express')

const ChoreApi = require('../models/chore.js')
const ChoreRouter = express.Router()

//get All
ChoreRouter.get('/', (req, res) => {
  ChoreApi.getAllChores()
    .then((allChores) => {
      return res.render('chore/allChores', { allChores })
    })
})
//create
ChoreRouter.get('/create/:wheelId', (req, res) => {
  res.render('chore/createChore', { wheelId: req.params.wheelId })
})
ChoreRouter.post('/:wheelId', (req, res) => {
  ChoreApi.createChore(req.body)
    .then(() => {
      return res.redirect(`/wheel/${req.params.wheelId}`)
    })
})
//update
ChoreRouter.get('/update/:id', (req, res) => {
  ChoreApi.getOneChore(req.params.id)
    .then((selectedChore) => {
      res.render('chore/updateChore', { selectedChore })
    })
})
ChoreRouter.get('/assign/:id', (req, res) => {
  ChoreApi.getOneChore(req.params.id)
    .then((selectedChore) => {
      res.render('chore/assignChore', { selectedChore })
    })
})
ChoreRouter.put('/:id', (req, res) => {
  ChoreApi.updateChore(req.params.id, req.body)
    .then(() => {
      return res.redirect(`/chore/${req.params.id}`)
    })
})
//delete
ChoreRouter.delete('/:id', (req, res) => {
  ChoreApi.getOneChore(req.params.id)
    .then((selectedChore) => {
      const wheelId = selectedChore.wheelId
      ChoreApi.deleteChore(req.params.id)
        .then(() => {
          return res.redirect(`/wheel/${wheelId}`)
        })
    })
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
