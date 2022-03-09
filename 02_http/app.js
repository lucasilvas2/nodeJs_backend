var http = require('http');

//http.createServer().listen();
//criar o servidor de para receber requisições e retornar respostas
//define porta de acesso
http.createServer(function(req, res){
    res.end('Hello world! Welcome to my web site.')
}).listen(9090);

console.log('Server on!')