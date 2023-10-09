CREATE TABLE `funcionario` (
	`ID` INT(11) NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`cpf` CHAR(11) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
  `ctps_numero` CHAR(10) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
  `ctps_serie` CHAR(5) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
  `ctps_emissao` DATE NULL DEFAULT NULL,
  `email`VARCHAR(255) NULL DEFAULT COLLATE 'utf8mb4_general_ci',
	`data_inicio` DATE NULL DEFAULT NULL,
  `celular` CHAR(11) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`created_at` TIMESTAMP NOT NULL DEFAULT current_timestamp(),
	`updated_at` TIMESTAMP NULL DEFAULT NULL,
	`status` CHAR(1) NULL DEFAULT '1' COLLATE 'utf8mb4_general_ci',
	PRIMARY KEY (`ID`) USING BTREE
);

INSERT INTO `fiap_db`.`funcionario` (`nome`, `cpf`, `ctps_numero`, `ctps_serie`, `ctps_emissao`, `email`, `data_inicio`, `celular`)
VALUES ('CARLOS', '65332844018', '1234567890', 'ABC12', '2023-01-15', 'carlos@example.com', '2023-10-09', '9876543210');

INSERT INTO `fiap_db`.`funcionario` (`nome`, `cpf`, `ctps_numero`, `ctps_serie`, `ctps_emissao`, `email`, `data_inicio`, `celular`)
VALUES ('VIVIAN', '46993132052', '9876543210', 'XYZ34', '2023-02-20', 'vivian@example.com', '2023-10-10', '1234567890');
