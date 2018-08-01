const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
//Server creation for Node.JS only -- not for express
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Good Bye Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});