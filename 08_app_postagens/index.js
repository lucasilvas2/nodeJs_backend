const express = require('express');
const app = express();

//config conexão BD mysql
const Sequelize =  require('sequelize');
const sequelize = new Sequelize('teste', 'root', '1102', {
    host: 'localhost',
    dialect: 'mysql'
});

//config template handlebars
const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//inciando server
app.listen(9090, function(){
    console.log('Servidor iniciado na url http://localhost:9090')
});