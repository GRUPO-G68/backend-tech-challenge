--  Cria o database e inicializa para uso
CREATE DATABASE IF NOT EXISTS fiap_db;

USE fiap_db;

-- Criaçao das tabelas

-- Cliente
CREATE TABLE IF NOT EXISTS Cliente (
  id INT AUTO_INCREMENT PRIMARY KEY ,
  nome VARCHAR(191),
  cpf VARCHAR(11) UNIQUE,
  email VARCHAR(191)
);

-- Funcionario
CREATE TABLE IF NOT EXISTS Funcionario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(191),
  cpf VARCHAR(11) UNIQUE,
  email VARCHAR(191),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME,
  status TINYINT DEFAULT 1
);

-- Categoria
CREATE TABLE IF NOT EXISTS Categoria (
  id INT AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(50) DEFAULT '0' UNIQUE,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME,
  status TINYINT DEFAULT 1
);

-- Situacao
CREATE TABLE IF NOT EXISTS Situacao (
  id INT AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(191)
);

-- Pedido
CREATE TABLE IF NOT EXISTS Pedido (
  id INT AUTO_INCREMENT PRIMARY KEY,
  idCliente INT,
  idSituacao INT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME,
  status TINYINT DEFAULT 1,
  FOREIGN KEY (idCliente) REFERENCES Cliente(ID),
  FOREIGN KEY (idSituacao) REFERENCES Situacao(id)
);

-- Produto
CREATE TABLE IF NOT EXISTS Produto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  idCategoria INT,
  preco FLOAT,
  nome VARCHAR(50) UNIQUE,
  descricao VARCHAR(150) UNIQUE,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME,
  status TINYINT DEFAULT 1,
  FOREIGN KEY (idCategoria) REFERENCES Categoria(id)
);

-- PedidoItem
CREATE TABLE IF NOT EXISTS PedidoItem (
  id INT AUTO_INCREMENT PRIMARY KEY,
  idPedido INT,
  idProduto INT,
  quantidade INT,
  FOREIGN KEY (idPedido) REFERENCES Pedido(id),
  FOREIGN KEY (idProduto) REFERENCES Produto(id)
);