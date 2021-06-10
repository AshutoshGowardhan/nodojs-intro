const http = require('http');
const fs = require('fs');
const _ = require('lodash')

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method)

    console.log('request made')

    let path = '../views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
    }

    // set header content type
    res.setHeader('Content-Type', 'text/html')
    // res.write('<h1>hello, ninjas</h1>')
    // res.write('<h2>hello, ninjas, second</h2>')
    // send the html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        } else {
            //res.write(data)
            res.end(data);
        }
    })
});

server.listen(3001, 'localhost', () => {
    console.log('listening for request for port 3000')
})

