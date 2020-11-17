const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    _id:Number,
    name:String,
    details:String,
    price:Number,
    image:String,
    company_id:String
})

module.exports = mongoose.model('Product', productSchema);