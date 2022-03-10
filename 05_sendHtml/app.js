const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + '/html/sobre.html')
});

app.get('/contato', function(req, res){
    res.sendFile(__dirname + '/html/contato.html')
});

app.listen(9090, function(){
    console.log('Servidor iniciado na url http://localhost:9090');
});
