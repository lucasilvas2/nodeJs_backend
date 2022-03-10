const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Raiz do projeto')
});

app.get('/sobre', function(req, res){
    res.send('Sobre minha aplicação')
});

app.listen(9090, function(){
    console.log('Servidor iniciado na url http://localhost:9090');
});
