const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 8080;

const server = http.createServer((req, resp)=>{
    console.log(req.url)
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/html');

    if(req.url === '/'){
        resp.statusCode = 200;
        resp.end('<h1> This is my code... <p> Hello miss! You can do it!!!</p>');
    }
    else if(req.url == '/about'){
        resp.statusCode = 200;
        resp.end('<h1> Its about time... <p> Hello miss! You can do it!!!</p>');
    }
    else if(req.url == '/helloo'){
        resp.statusCode = 200;
        const data = fs.readFileSync('index.html');
        resp.end(data.toString());
    }
    else{
        resp.statusCode = 404;
        resp.end('<h1> Not Found <p> The page was not found on the server! </p>');
    }
} )


server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
});