var h=require('http');
var dt=require('./mysecondmodule');
h.createServer(function(req,res){
res.writeHead(200,{'content-type':'text/html'});
res.write("<p style='font-size:25px';Time node.Js web server:<br><b style='color:red;'>"+dt.myDateTime()+"</b>");
res.write("<br><b style='color:blue;'>URL Pattern:"+req.url+"</b></p>");
res.end();
}).listen(8090);