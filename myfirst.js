var h=require('http');
h.createServer(function(req,res){
		res.writeHead(200,{'content-type':'text/html'});
		res.end('hello world!');}).listen(8080);
