// task 1 :
console.log('\n \n ------------- task 1 --------------- \n ')
const http = require('http')

console.log('hello world')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<h1>Hello Node!!!!</h1>\n')
})

// task 2  :
console.log('\n \n ------------- task 2 --------------- \n ')
server.listen(3500 , () => {
    console.log('Server running on port 3000')
})

// task  3 :
console.log('\n \n ------------- task 3 --------------- \n ')
const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
