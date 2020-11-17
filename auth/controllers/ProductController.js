const e = require('express');
const Product = require('../models/Product.js');

exports.findAll = (req, res) => {
    Product.find({}, (err,data) => {
        if(err) {
            res.json({"msg":"There has been an error (FIND_ALL)"});
        }
        else {
            res.send(data);
        }
    })
}

exports.addProduct = (req, res) => {
    Product.create(req.body, (err,data) => {
        if(err) {
            return res.status(422).json({"error":"Oops! Something went wrong"});
        }
        else {
            res.send(data);
        }
    }) 
}

exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err,product) => {
        if(err) {
            res.json({"msg":"There has been an error (UPDATE_PRODUCT)"});
        }
        else {
            res.send(product);
        }
    })
}

exports.deleteProduct = (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err,product) => {
        if(err) {
            res.json({"msg":"There has been an error (DELETE_PRODUCT)"});
        }
        else {
            res.send(product);
        }
    })
}
