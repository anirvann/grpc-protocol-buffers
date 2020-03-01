const path = require('path');
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(path.join(__dirname, "proto", "User.proto"), {}) //empty object would otherwise contain initial configuration for proto file
const grpcInstnc = grpc.loadPackageDefinition(packageDefinition);
const UserPackage = grpcInstnc.UserPackage;

const client = new UserPackage.Users("localhost:3000", grpc.credentials.createInsecure());

const syncTimeStart = new Date().getTime();
client.getUsers({ }, (error, response) => {
  // console.log(`Server Response: ${JSON.stringify(response)}`);
});
const syncTimeEnd = new Date().getTime();


const streamTimeStart = new Date().getTime();
const readStream = client.streamUsers();
readStream.on("data", item => item);
readStream.on("end", e => e);
const streamTimeEnd = new Date().getTime();

console.table([
  { name: 'grpcData', milliSec: syncTimeEnd - syncTimeStart },
  { name: 'grpcStream', milliSec: streamTimeEnd - streamTimeStart }
]);
