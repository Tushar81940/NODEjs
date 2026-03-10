const http = require('http');



const server = http.createServer(function requestListener(req,res){
console.log(req.url,req.method, req.headers);
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>My First Node App</title></head>');
res.write('<body><h1>Hello World</h1></body>');
res.write('</html>');
res.end();

process.exit(); //Stops Event Loop
});

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});