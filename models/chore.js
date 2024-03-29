const mongoose = require('./connection.js')

const ChoreSchema = new mongoose.Schema({
  chore: String,
  frequency: Number,
  completed: Boolean,
  dateCreated: { type: Date, default: Date.now },
  memberId: mongoose.ObjectId,
})

const ChoreCollection = mongoose.model('Chore', ChoreSchema)

//get All
const getAllChores = () => {
  return ChoreCollection.find({})
}

//find by wheelId
const findChoresByMemberId = (memberId) => {
  return ChoreCollection.find({ memberId })
}

//create
const createChore = (newChore) => {
  return ChoreCollection.create(newChore)
}

//update
const updateChore = (id, newChore) => {
  return ChoreCollection.updateOne({ _id: id }, newChore)
}

//delete
const deleteChore = (id) => {
  return ChoreCollection.deleteOne({ _id: id })
}

//get one
const getOneChore = (id) => {
  return ChoreCollection.findById(id)
}

module.exports = {
  getAllChores,
  createChore,
  updateChore,
  deleteChore,
  getOneChore,
  findChoresByMemberId
}
