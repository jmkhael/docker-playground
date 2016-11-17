"use strict"
const http = require('http');
const os = require('os');

let hostname = os.hostname();

http.createServer((req, res) => {  
  res.end('world');
}).listen(5000);
