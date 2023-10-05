CREATE DATABASE IF NOT EXISTS fiap_db;
USE fiap_db;

CREATE TABLE IF NOT EXISTS clientes (
    ID INT (11) AUTO_INCREMENT,
    nome VARCHAR(255),
    cpf CHAR(11),
    PRIMARY KEY (ID)
);

INSERT INTO `fiap_db`.`clientes` (`nome`, `cpf`) VALUES ('JOSE', '65332844018');
INSERT INTO `fiap_db`.`clientes` (`nome`, `cpf`) VALUES ('MARIA', '46993132052');