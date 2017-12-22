
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

USE `artista` ;

INSERT INTO `user` (`id`,`name`,`email`,`pwdhash`,`regTimestamp`,`type`) VALUES
	('1','Anton Banana', 'anton.banana@mail.com','0000',CURRENT_TIMESTAMP(),'0'),
    ('2','Benjamin Hruška', 'ben.hr@mail.com','0000',CURRENT_TIMESTAMP(),'0'),
    ('3','Cene Jabuk', 'cene.ja@mail.com','0000',CURRENT_TIMESTAMP(),'0'),
    ('4','David Mandarina', 'david.ma@mail.com','0000',CURRENT_TIMESTAMP(),'0'),
    ('5','Edvard Grozd', 'edvard.grozd@mail.com','0000',CURRENT_TIMESTAMP(),'1');
    
INSERT INTO `seller` (`user`,`rating`) VALUES
	('5', 0);