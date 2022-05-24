var http = require('http');

http.createServer(function (req, res){
 console.log('Recieving request');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello world\n');
    res.end();
}).listen(3000, 'localhost');

console.log('Server running at http://localhost:3000/');
