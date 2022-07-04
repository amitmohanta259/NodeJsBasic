const http = require("http");
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'}); //sending header media type
    res.write("<h1>Hello World</h1>");
    console.log("hit the server");
    res.end();
});

server.listen(5001);