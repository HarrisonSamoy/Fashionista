const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name:String,
    details:String,
    price:Number,
    image:String,
    amount:Number,
    company_id:String
})

module.exports = mongoose.model('Product', productSchema);