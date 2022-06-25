const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Parcial Demo App 4.0</h1> <h4>Message: Success 4th run Run</h4> <p>Version 4.0</p>')
})

app.get('/products', (req, res) => {
    res.send([{
        productId: '151',
        price: 102
    },
    {
        productId: '222',
        price: 125
    }])
})

app.listen(port, ()=> {
    console.log(`Demo app is up and listening to port: ${port}`);
})

