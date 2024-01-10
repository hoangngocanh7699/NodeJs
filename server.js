const http = require('http') // Thư viện có sẵn của NodeJs

const hostname = '127.0.0.1' // localhost
const port = 3000

// hàm render nội dung Website
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello world\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})