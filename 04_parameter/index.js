const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Bem-vindo ao nosso site!')
});

app.get('/sobre', function(req, res){
    res.send('Sobre minha aplicação')
});

app.get('/ola/:nome/:cargo', function(req, res){
    res.send('<h1> Olá, ' + req.params.nome + '.</h1>' + '<h2> Seu cargo atual: ' + req.params.cargo + '. </h2>');
});

app.get('/ola/info/:nome/:cargo', function(req, res){
    res.send(req.params);
});

app.listen(9090, function(){
    console.log('Servidor iniciado na url http://localhost:9090');
});
