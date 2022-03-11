-- CREATE TABLE

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

-- Descrição da tabela
DESCRIBE usuarios;

-- INSERT - inserindo dados
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Lucas S",
    "lucas@email.com",
    16
);

INSERT INTO usuarios(email, idade, nome) VALUES(   
    "carlos@email.com",
    25,
    "Carlos S"
);

--SELECT -  consultando dados da tabela 
SELECT * FROM usuarios;

-- WHERE - encontrando dados por valores
SELECT * FROM usuarios WHERE idade = 16;

SELECT * FROM usuarios WHERE idade >= 18;

-- DELETE - deletar um dados
DELETE FROM usuarios WHERE nome = "Lucas S";

-- UPDATE - atualizar dados
UPDATE usuarios SET nome = "Francisco S" WHERE nome = "Carlos S"; 