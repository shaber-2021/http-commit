const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'
const myserver = http.createServer((req,res)=>{
    res.end('hi shaber ahmad how are you')
});

myserver.listen(port,hostname,()=>{
    console.log(`your server is raning http://${hostname}:${port}`)
})
