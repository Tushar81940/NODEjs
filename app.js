const http = require('http');



const server = http.createServer(function requestListener(req,res){
console.log(req.url,req.method, req.headers);
if(req.url=='/'){
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>My First Node App</title></head>');
res.write('<body><h1>Hello World</h1></body>');
res.write('</html>');
return res.end();
}
else if(req.url=='/about'){
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>About Us</title></head>');
res.write('<body><h1>About Us</h1><p>This is a simple Node.js application.</p></body>');
res.write('</html>');
res.end();
}




// process.exit(); //Stops Event Loop
});

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});