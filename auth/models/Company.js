const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
    _id:String,
    name:String
})

module.exports = mongoose.model('Company', companySchema);
