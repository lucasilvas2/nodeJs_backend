const Sequelize =  require('sequelize');
const sequelize = new Sequelize('teste', 'root', '1102', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Conexão com o banco de dados funcionando!')
}).catch(function(ERRO){
    console.log('Falha ao se conectar: '+ ERRO);
}); 