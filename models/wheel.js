const mongoose = require('./connection.js')

const WheelSchema = new mongoose.Schema({
  title: String,
  description: String,
  dateCreated: { type: Date, default: Date.now },
  chores: String,
  people: String,
  choreId: mongoose.ObjectId,
  personId: mongoose.ObjectId
})

const WheelCollection = mongoose.model('Wheel', WheelSchema)

//get All
const getAllWheels = () => {
  return WheelCollection.find({})
}

//create
const createWheel = (newWheel) => {
  return WheelCollection.create(newWheel)
}

//update
const updateWheel = (id, newWheel) => {
  return WheelCollection.updateOne({ _id: id }, newWheel)
}

//delete
const deleteWheel = (id) => {
  return WheelCollection.deleteOne({ _id: id })
}

//get one
const getOneWheel = (id) => {
  return WheelCollection.findById(id)
}

module.exports = {
  getAllWheels,
  createWheel,
  updateWheel,
  deleteWheel,
  getOneWheel
}
