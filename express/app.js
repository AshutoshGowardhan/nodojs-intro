const express = require('express');

const app = express()

// listen for request

app.listen(3000);

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

