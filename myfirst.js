var http = require('http');
const net = require('net');
const client = net.connect({port: 80, host:"google.com"}, () => {
  console.log('MyIP='+client.localAddress);
  console.log('MyPORT='+client.localPort);
});
http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);
