const mongoose = require('./connection.js')

const WheelSchema = new mongoose.Schema({
  chores: String,
  people: String,
  description: String,
  dateCreated: { type: Date, default: Date.now },
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
  return WheelCollection.updateOne(id, newWheel)
}

//delete
const deleteWheel = (id) => {
  return WheelCollection.deleteOne(id)
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
