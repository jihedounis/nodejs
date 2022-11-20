var http = require('http');
var fs = require('fs');

var data = fs.readFileSync('welcome.txt');


http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end("<h1>Hello Node!!!!</h1>\n");
   
}).listen(3000);


console.log("welcome.txt file contain : : " + data.toString());
