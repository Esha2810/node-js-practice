const { Console } = require('console');
const http = require('http');

const port = process.env.PORT || 8080;

const server = http.createServer((req, resp)=>{
    console.log(req.url)
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/html');
    resp.end('<h1> This is My file...yes</p>');
} )


server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
});