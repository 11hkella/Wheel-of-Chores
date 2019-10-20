const express = require('express')

const ChoreApi = require('../models/chore.js')
const ChoreRouter = express.Router()

//get All
ChoreRouter.get('/', (req, res) => {
  ChoreApi.getAllChores()
    .then((newChore) => {
      return res.json(newChore)
    })
})
//create
ChoreRouter.post('/', (req, res) => {
  ChoreApi.createChore(req.body)
    .then((newChore) => {
      return res.json(newChore)
    })
})
//update
ChoreRouter.put('/:id', (req, res) => {
  ChoreApi.updateChore(req.params.id, req.body)
    .then((newChore) => {
      return res.json(newChore)
    })
})
//delete
ChoreRouter.delete('/:id', (req, res) => {
  ChoreApi.deleteChore(req.params.id)
    .then((newChore) => {
      return res.json(newChore)
    })
})
//get one
ChoreRouter.get('/:id', (req, res) => {
  ChoreApi.getOneChore(req.params.id)
    .then((newChore) => {
      return res.json(newChore)
    })
})

module.exports = {
  ChoreRouter
}
