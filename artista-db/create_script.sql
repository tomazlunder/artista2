-- MySQL Script generated by MySQL Workbench
-- Fri Dec 22 09:45:01 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema artista
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `artista` ;

-- -----------------------------------------------------
-- Schema artista
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `artista` DEFAULT CHARACTER SET utf8 ;
USE `artista` ;

-- -----------------------------------------------------
-- Table `artista`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `artista`.`user` ;

CREATE TABLE IF NOT EXISTS `artista`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `pwdhash` VARCHAR(45) NOT NULL,
  `regTimestamp` DATETIME NOT NULL,
  `type` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artista`.`seller`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `artista`.`seller` ;

CREATE TABLE IF NOT EXISTS `artista`.`seller` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user` INT NOT NULL,
  `rating` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_idx` (`user` ASC),
  CONSTRAINT `fk_seller_user`
    FOREIGN KEY (`user`)
    REFERENCES `artista`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artista`.`picture`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `artista`.`picture` ;

CREATE TABLE IF NOT EXISTS `artista`.`picture` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `seller` INT NOT NULL,
  `isProfile` TINYINT NOT NULL,
  `image` BLOB NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_picture_seller_idx` (`seller` ASC),
  CONSTRAINT `fk_picture_seller`
    FOREIGN KEY (`seller`)
    REFERENCES `artista`.`seller` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = big5;


-- -----------------------------------------------------
-- Table `artista`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `artista`.`category` ;

CREATE TABLE IF NOT EXISTS `artista`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artista`.`listing`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `artista`.`listing` ;

CREATE TABLE IF NOT EXISTS `artista`.`listing` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `seller` INT NOT NULL,
  `price` FLOAT NOT NULL,
  `description` BLOB NOT NULL,
  `timestamp` DATETIME NOT NULL,
  `shown` TINYINT NOT NULL,
  `category` INT NOT NULL,
  `mainPic` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_idx` (`seller` ASC),
  INDEX `id_idx1` (`category` ASC),
  INDEX `idPicture_idx` (`mainPic` ASC),
  CONSTRAINT `fk_listing_seller`
    FOREIGN KEY (`seller`)
    REFERENCES `artista`.`seller` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_listing_category`
    FOREIGN KEY (`category`)
    REFERENCES `artista`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_listing_picture`
    FOREIGN KEY (`mainPic`)
    REFERENCES `artista`.`picture` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artista`.`portfolio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `artista`.`portfolio` ;

CREATE TABLE IF NOT EXISTS `artista`.`portfolio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `seller` INT NOT NULL,
  `description` BLOB NULL,
  PRIMARY KEY (`id`),
  INDEX `id_idx` (`seller` ASC),
  CONSTRAINT `fk_portfolio_seller`
    FOREIGN KEY (`seller`)
    REFERENCES `artista`.`seller` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artista`.`listing_picture`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `artista`.`listing_picture` ;

CREATE TABLE IF NOT EXISTS `artista`.`listing_picture` (
  `listing_id` INT NOT NULL,
  `picture_id` INT NOT NULL,
  PRIMARY KEY (`listing_id`, `picture_id`),
  INDEX `fk_listing_has_picture_picture1_idx` (`picture_id` ASC),
  INDEX `fk_listing_has_picture_listing1_idx` (`listing_id` ASC),
  CONSTRAINT `fk_listing_picture_listing1`
    FOREIGN KEY (`listing_id`)
    REFERENCES `artista`.`listing` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_listing_picture_picture1`
    FOREIGN KEY (`picture_id`)
    REFERENCES `artista`.`picture` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `artista`.`portfolio_picture`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `artista`.`portfolio_picture` ;

CREATE TABLE IF NOT EXISTS `artista`.`portfolio_picture` (
  `portfolio_id` INT NOT NULL,
  `picture_id` INT NOT NULL,
  PRIMARY KEY (`portfolio_id`, `picture_id`),
  INDEX `fk_portfolio_has_picture_picture1_idx` (`picture_id` ASC),
  INDEX `fk_portfolio_has_picture_portfolio1_idx` (`portfolio_id` ASC),
  CONSTRAINT `fk_portfolio_picture_portfolio1`
    FOREIGN KEY (`portfolio_id`)
    REFERENCES `artista`.`portfolio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_portfolio_picture_picture1`
    FOREIGN KEY (`picture_id`)
    REFERENCES `artista`.`picture` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `artista`;

DELIMITER $$

USE `artista`$$
DROP TRIGGER IF EXISTS `artista`.`seller_AFTER_INSERT` $$
USE `artista`$$
CREATE DEFINER = CURRENT_USER TRIGGER `artista`.`seller_AFTER_INSERT` AFTER INSERT ON `seller` FOR EACH ROW
BEGIN
	UPDATE `artista`.`user` SET `type` = 1 WHERE `id`= NEW.user;
END$$


DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
