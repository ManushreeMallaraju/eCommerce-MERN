//entry point for our project
const express = require('express'); //using require is common JS, with node we can use ES6 modules
const products = require('./data/products');
const app = express();

app.get('/', (req, res) => {
    res.send('API is running');
})

app.get('/api/products', (req, res) => {
    res.json(products);
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id) //id passed in the route
    res.json(product);
})

app.listen(5000, console.log('Server running on port 5000'))
