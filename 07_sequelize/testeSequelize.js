//requisitando o módulo
const Sequelize =  require('sequelize');
//definindo parametros de conexão com o banco de dados
//nome, usuário e senha
const sequelize = new Sequelize('teste', 'root', '1102', {
    host: 'localhost',
    dialect: 'mysql'
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});
//cria a tabela na BD
Postagem.sync({force: true})

Postagem.create({
	titulo: "Primeira postagem",
	conteudo: "Sempre tem algo novo para aprender..."
});

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.sync({force: true})

Usuario.create({
    nome: "Lucas",
    sobrenome: "Silva",
    idade: 25,
    email: "lucas@email.com"

})
//informa sobre o a conexão com o banco de dados
sequelize.authenticate().then(function(){
    console.log('Conexão com o banco de dados funcionando!')
}).catch(function(ERRO){
    console.log('Falha ao se conectar: '+ ERRO);
}); 