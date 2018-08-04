var http = require('http'); 
var reqcon = require('./RequestControl.js');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
     res.write("Requested Time: " + reqcon.LogFile());
res.end();

}).listen(8080,'127.0.0.1');
