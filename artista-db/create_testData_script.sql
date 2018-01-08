
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

USE `artista` ;

INSERT INTO `user` (`name`,`email`,`pwdhash`) VALUES
	('Anton Banana', 'anton.banana@mail.com','0000'),
    ('Benjamin Hruška', 'ben.hr@mail.com','0000'),
    ('Cene Jabuk', 'cene.ja@mail.com','0000'),
    ('David Mandarina', 'david.ma@mail.com','0000'),
    ('Edvard Grozd', 'edvard.grozd@mail.com','0000'),
    ('Fony Bony', 'fony.bony@mail.com','0000'),			#Seller
    ('German Gui', 'german.gui@mail.com', '0000'),		#Seller
    ('Herman Pomaranča', 'her.pom@mail.com', '0000'),
    ('Ian Koruza', 'pwner1339@mail.com', '0000'),
    ('Jaka Kaka', 'jaka.k@mail.com', '0000');
    
INSERT INTO `seller` (`user`) VALUES
	('6'),('7');
    
    
INSERT INTO `category` (`name`) VALUES
	('Statue'),('Painting'),('Other');
    

    
UPDATE `portfolio`
SET `description` = "I am a very good artist, people like my work"
WHERE `seller` = 1;

UPDATE `portfolio`
SET `description` = "I am a decent artist, currently taking orders"
WHERE `seller` = 2;
    
    
INSERT INTO `picture`(`seller`,`isProfile`,`path`) VALUES
	(1,1,"..\\public\\pictures\\test1.png");

    
INSERT INTO `listing`(`seller`,`price`,`description`,`shown`,`category`,`mainPic`) VALUES
	(1,199.98,"Statue of david, cheap!", 1, 1, null);
    
CALL proc_addListingPicture(1,"..\\public\\pictures\\listing1_1.png",1);
CALL proc_addListingPicture(1,"..\\public\\pictures\\listing1_2.png",1);
    
    