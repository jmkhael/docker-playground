"use strict"
const http = require('http');
const os = require('os');

const RxHttpRequest = require('rx-http-request').RxHttpRequest;
var Rx = require('rxjs/Rx');

var Client = require('node-rest-client').Client;
var client = new Client();

let hostname = os.hostname();

function hello_world() {
  return Rx.Observable.concat(
    RxHttpRequest.get('http://hello-svc:5000'),
    RxHttpRequest.get('http://world-svc:5000'))
    .reduce(
      (acc, x, idx, source) => {
         return acc + " " + x.body;
      }, "");
}

http.createServer((req, res) => {  
    hello_world().subscribe(
        (x) => {
           console.log('Next: ' + x);
           res.end(x);
        },
        (err) => {
            console.log('Error: ' + err);
        },
        () => {
            console.log('Completed');
        });
}).listen(5000);
