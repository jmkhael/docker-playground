"use strict"
const http = require('http');
const os = require('os');

let hostname = os.hostname();

http.createServer((req, res) => {  
  res.end('Hello');
}).listen(5000);
