const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statementSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      default: '',
      validate: (val)=> {
        return val.length < 80
      }
    },
    sortNum: {
      type: Number,
      default: 0
    }
  }, {
  versionKey: false,
  collection: 'statement'
})

module.exports = mongoose.model('Statement', statementSchema);