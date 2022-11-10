-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Proyecto_Integrador_Grupo7
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Proyecto_Integrador_Grupo7
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Proyecto_Integrador_Grupo7` DEFAULT CHARACTER SET utf8 ;
USE `Proyecto_Integrador_Grupo7` ;

-- -----------------------------------------------------
-- Table `Proyecto_Integrador_Grupo7`.`Categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto_Integrador_Grupo7`.`Categories` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(45) NOT NULL,
  `DESCRIPTION` VARCHAR(400) NOT NULL,
  `URL` VARCHAR(200) NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Proyecto_Integrador_Grupo7`.`Characteristics`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto_Integrador_Grupo7`.`Characteristics` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(45) NOT NULL,
  `ICON_URL` VARCHAR(200) NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Proyecto_Integrador_Grupo7`.`Cities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto_Integrador_Grupo7`.`Cities` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Proyecto_Integrador_Grupo7`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto_Integrador_Grupo7`.`Products` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(45) NOT NULL,
  `DESCRIPTION` VARCHAR(400) NULL,
  `AVAILABILITY` VARCHAR(45) NULL,
  `POLICIES` VARCHAR(45) NULL,
  `LONGITUDE` VARCHAR(45) NULL,
  `LATITUDE` VARCHAR(45) NULL,
  `Cities_ID` INT NOT NULL,
  `Categories_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Cities_ID`, `Categories_ID`),
  INDEX `fk_Products_Cities1_idx` (`Cities_ID` ASC) VISIBLE,
  INDEX `fk_Products_Categories1_idx` (`Categories_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Products_Cities1`
    FOREIGN KEY (`Cities_ID`)
    REFERENCES `Proyecto_Integrador_Grupo7`.`Cities` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Products_Categories1`
    FOREIGN KEY (`Categories_ID`)
    REFERENCES `Proyecto_Integrador_Grupo7`.`Categories` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Proyecto_Integrador_Grupo7`.`Characteristics_has_Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto_Integrador_Grupo7`.`Characteristics_has_Products` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Characteristics_ID` INT NOT NULL,
  `Products_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Characteristics_ID`, `Products_ID`),
  INDEX `fk_Characteristics_has_Products_Products1_idx` (`Products_ID` ASC) VISIBLE,
  INDEX `fk_Characteristics_has_Products_Characteristics_idx` (`Characteristics_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Characteristics_has_Products_Characteristics`
    FOREIGN KEY (`Characteristics_ID`)
    REFERENCES `Proyecto_Integrador_Grupo7`.`Characteristics` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Characteristics_has_Products_Products1`
    FOREIGN KEY (`Products_ID`)
    REFERENCES `Proyecto_Integrador_Grupo7`.`Products` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Proyecto_Integrador_Grupo7`.`Images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Proyecto_Integrador_Grupo7`.`Images` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(45) NOT NULL,
  `URL` VARCHAR(200) NULL,
  `Products_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Products_ID`),
  INDEX `fk_Images_Products1_idx` (`Products_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Images_Products1`
    FOREIGN KEY (`Products_ID`)
    REFERENCES `Proyecto_Integrador_Grupo7`.`Products` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
