module.exports = function (app) {
    var products = require('../controllers/ProductController.js')
    app.get('/api/products', products.findAll);
    app.post('/api/products', products.addProduct);
    app.put('/api/products/:id', products.updateProduct);
    app.delete('/api/products/:id', products.deleteProduct);
}