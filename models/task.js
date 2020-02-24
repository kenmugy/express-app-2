const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const taskModel = new Schema({
  name: String,
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = model('Task', taskModel);
