CREATE TABLE `cliente` (
	`ID` INT(11) NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`cpf` CHAR(11) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`created_at` TIMESTAMP NOT NULL DEFAULT current_timestamp(),
	`updated_at` TIMESTAMP NULL DEFAULT NULL,
	`status` CHAR(1) NULL DEFAULT '1' COLLATE 'utf8mb4_general_ci',
	PRIMARY KEY (`ID`) USING BTREE
);

INSERT INTO `fiap_db`.`clientes` (`nome`, `cpf`) VALUES ('JOSE', '65332844018');
INSERT INTO `fiap_db`.`clientes` (`nome`, `cpf`) VALUES ('MARIA', '46993132052');