const http = require('http');
const users = require("./db/users.js");


const requestListener = function (request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ "users": users }));
}

const server = http.createServer(requestListener);
server.listen(8080);