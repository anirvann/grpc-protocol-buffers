const path = require('path');
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const users = require("./db/users.js");

const packageDefinition = protoLoader.loadSync(path.join(__dirname, "proto", "User.proto"), {}) //empty object would otherwise contain initial configuration for proto file
const grpcInstnc = grpc.loadPackageDefinition(packageDefinition);
const UserPackage = grpcInstnc.UserPackage;

const server = new grpc.Server();
server.bind("0.0.0.0:3000", grpc.ServerCredentials.createInsecure()) // HTTP/2 by default needs credentials. We bypass that by the createInsecure method.

//add services created to the server
server.addService(UserPackage.Users.service, {
  "getUsers": getUsers,
  "streamUsers": streamUsers
});
server.start();


function getUsers (call, callback) {
  callback(null, { "users": users });
}

function streamUsers (call, callback) {
  console.log(typeof users, users.length);
  users.forEach(u => call.write(u))
  call.end();
}