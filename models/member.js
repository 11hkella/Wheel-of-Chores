const mongoose = require('./connection.js')

const MemberSchema = new mongoose.Schema({
  name: String,
  picture: {
    type: String, default: "https://i.pinimg.com/originals/0f/7b/fa/0f7bfa4e6775b5977694a6036fc85b48.png"
  },
  choreId: mongoose.ObjectId,
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
