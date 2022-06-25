const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Parcial Demo App 2.0</h1> <h4>Message: Success 2nd Run</h4> <p>Version 2.0</p>')
})

app.get('/products', (req, res) => {
    res.send([{
        productId: '131',
        price: 100
    },
    {
        productId: '222',
        price: 125
    }])
})

app.listen(port, ()=> {
    console.log(`Demo app is up and listening to port: ${port}`);
})