const http = require('http');

http.createServer((req, res) => {
  res.write('Application Running sucessfully');
  res.end();
}).listen(3000, '0.0.0.0');

console.log("Server running on port 3000");
