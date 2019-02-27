var http = require('http');

http.createServer((req,res) =>{

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\n');


}).listen(8124, '127.0.01');

console.log('Server running')



