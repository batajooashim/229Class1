// Creating http const for building our server
const http = require('http');
const sub = require('./sub');
const sum = require('./sum');
const mul = require('./mul');

// Using http to create server with 2 arguments - req and res
http.createServer((req, res) => {

    // Writing the content type to be displayed
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    calculateNumbers(res);

    // Content to be displayed on your backend server
    res.end('Hello, World! This is my first server!');
}).listen(4200); // Listening on port 4200

// Running and testing the server
console.log('Server running at http://localhost:4200/');

function calculateNumbers(resFn) {
    const num1 = 5;
    const num2 = 3;

    resFn.write(`Number A: ${num1} Number B: ${num2}\r\n`);    

    resFn.write('Results: \r\n')
    resFn.write(`Subtract: ${sub.calc(5,3)}\r\n`);
    resFn.write(`Sum: ${sum.calc(5,3)}\r\n`);
    resFn.write(`Multiply: ${mul.calc(5,3)}\r\n`);
}