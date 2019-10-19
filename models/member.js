const mongoose = require('./connection.js')

const MemberSchema = new mongoose.Schema({
  title: String,
  description: String,
  dateCreated: { type: Date, default: Date.now },
  chores: String,
  people: String,
  choreId: mongoose.ObjectId,
  personId: mongoose.ObjectId
})

const MemberCollection = mongoose.model('Member', MemberSchema)

//get All
const getAllMembers = () => {
  return MemberCollection.find({})
}

//create
const createMember = (newMember) => {
  return MemberCollection.create(newMember)
}

//update
const updateMember = (id, newMember) => {
  return MemberCollection.updateOne({ _id: id }, newMember)
}

//delete
const deleteMember = (id) => {
  return MemberCollection.deleteOne({ _id: id })
}

//get one
const getOneMember = (id) => {
  return MemberCollection.findById(id)
}

module.exports = {
  getAllMembers,
  createMember,
  updateMember,
  deleteMember,
  getOneMember
}
