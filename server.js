const path = require('path');
const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'index2.html'), (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

server.listen(port,
    hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);

});