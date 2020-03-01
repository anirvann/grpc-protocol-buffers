const fs = require("fs");
const path = require("path");
const faker = require("faker");

const users = [];
for(let i = 0; i < 10000; i++){
  users.push({
    "id": users.length + 1,
    "firstName": faker.name.firstName(),
    "lastName": faker.name.lastName()
  });
}

fs.writeFileSync(path.join(__dirname, "..", "db", "users.js"), `module.exports = ${JSON.stringify(users, null, 2)}`);