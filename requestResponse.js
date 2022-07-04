const http = require("http");
const {readFileSync} =require("fs");
//get html file 
const homePage = readFileSync("./index.html");


const server = http.createServer((req,res)=>{
    console.log(req.url);
    const url = req.url;
    if(url === "/"){
        res.writeHead(200,{"content-type": "text/html"});
        res.write(homePage);
        console.log(res.statusCode);
        res.end();
    }else if(url === "/about"){
        res.writeHead(200,{"content-type": "text/html"});
        res.write("<h1>About Page</h1>");
        console.log(res.statusCode);
        res.end();
    }else{
        res.writeHead(400,{"content-type": "text/html"});
        res.write("<h1>Page Not Found</h1>");
        console.log(res.statusCode);
        res.end();
    }
    
});
server.listen(5002);
