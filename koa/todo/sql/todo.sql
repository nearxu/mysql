CREATE DATABASE test;
USE test;
CREATE TABLE `todo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `content` varchar(500) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_done` int(11) DEFAULT '0',
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
)