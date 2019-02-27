var http = require('http');

http.createServer((req,res) => {
    res.writeHead(200);
    res.end('alive')
}).listen(8124);