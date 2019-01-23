var http = require('http')

http.createServer((req, res) =>{
  res.writeHead(200, {'Cheese':'Love', 'Content-Type':'text/plain'});

  doThis("one", "two");

  //res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello World!\n');

}).listen(8124, '127.0.0.1');

console.log("Server running at http://127.0.0.1");

function doThis(arg1, arg2) {
    return new Promise((resolve, reject) => {
        // execute some asynchronous code

        res.writeContinue("Test")
        if (errorIsDetected) return reject(errorObject);
        // When the process is finished call this:
        resolve(result1, result2);
}); }