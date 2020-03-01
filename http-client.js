const http = require('http');

const options = {
  host: 'localhost',
  port: 8080,
  path: '/'
};
const result = [];
const httpTimeStart = new Date().getTime();
const req = http.request(options, (response) => {
  response.on('data', (d) => {
    result.push(d);
  });
  response.on('end', e => {
    const httpTimeEnd = new Date().getTime();
    console.table([
      { name: 'httpData', milliSec: httpTimeEnd - httpTimeStart }
    ]);
  });
});
req.end();