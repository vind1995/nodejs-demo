
const request = require("request");
request("http://www.google.com",function(error,response,body) {
  console.log(body);
});


let http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
})

server.listen(8080);
