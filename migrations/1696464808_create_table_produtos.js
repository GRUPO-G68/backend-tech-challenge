module.exports = {
    "up": "CREATE TABLE `produtos` (`id` INT(11) NOT NULL AUTO_INCREMENT,`descricao` VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_general_ci',PRIMARY KEY (`id`) USING BTREE)",
    "down": "DROP TABLE produtos"
}