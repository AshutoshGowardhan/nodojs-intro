const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method)

    console.log('request made')

    // set header content type
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>hello, ninjas</h1>')
    res.write('<h2>hello, ninjas, second</h2>')
    res.end()
});

server.listen(3001, 'localhost', () => {
    console.log('listening for request for port 3000')
})

