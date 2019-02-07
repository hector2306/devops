var https = require(`http`);
https.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'Text/plain'})
    res.end(`Hello Travis CI from my app`)
    
}).listen(1337, `127.0.0.1`);
Console.log(`server is running`);