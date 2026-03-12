const http = require('http');

const userRequestHandler = require('./new');

const server = http.createServer(userRequestHandler);
const PORT = 3002;
server.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});