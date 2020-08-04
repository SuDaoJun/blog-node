const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sourceSchema = new Schema({
  sourceId: {
    type: String,
    required: true,
  },
  name: {
    type: String
  },
  type: {
    type: String
  },
  url: {
    type: String,
    required: true,
  }
}, {
  versionKey: false,
  collection: 'source'
})

module.exports = mongoose.model('Source', sourceSchema);