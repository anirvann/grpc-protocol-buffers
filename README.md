# gRPC and Protocol Buffers

## How to run the examples:

  **Note:** Ensure that you have a nodejs version >= 10.
  - Install dependencies with `npm install`

  - Run the tests
    - `npm run start-grpc-server` to start the grpc server.
    - `npm run start-grpc-client` to run the grpc client.
    - `npm run start-http-server` to start the http server.
    - `npm run start-http-client` to run the grpc client.

  **Note:** Faker has been used to generate 10k users. This number is used to compare gRPC and HTTP response time. Feel free to modify the `bin/generateUsers.js`.