
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=1;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=1;
#SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

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
	(1,1,"..\\..\\public\\pictures\\test1.png");

    
INSERT INTO `listing`(`seller`,`price`,`description`,`shown`,`category`,`mainPic`,`name`) VALUES
	(1,199.98,"Cheap!", 1, 1, null,"Statue of David");

DO SLEEP(1);
    
INSERT INTO `listing`(`seller`,`price`,`description`,`shown`,`category`,`mainPic`,`name`) VALUES
	(1,3.50,"Brand new!", 1, 2, null,"Mona Lisa");
    
DO SLEEP(1);

INSERT INTO `listing`(`seller`,`price`,`description`,`shown`,`category`,`mainPic`,`name`) VALUES
	(2,200000,"Stolen", 1, 2, null, "Lucian Freud's Francis Bacon");
    
DO SLEEP(1);

    
CALL proc_addProfilePicture(1,"..\\..\\public\\pictures\\test1.png");
    
CALL proc_addListingPicture(1,"..\\..\\public\\pictures\\listing1_1.png");
CALL proc_addListingPicture(1,"..\\..\\public\\pictures\\listing1_2.png");

CALL proc_addListingPicture(2,"..\\..\\public\\pictures\\listing2_1.png");
CALL proc_addListingPicture(2,"..\\..\\public\\pictures\\listing2_2.png");

CALL proc_addListingPicture(3,"..\\..\\public\\pictures\\listing3_1.png");

CALL proc_addPortfolioPicture(1,"..\\..\\public\\pictures\\test1.png");