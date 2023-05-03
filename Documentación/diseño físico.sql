-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`book` (
  `isbn` INT NOT NULL,
  `pages` INT NULL,
  `release_year` YEAR(4) NULL,
  `stock` INT NULL,
  `price` DECIMAL NULL,
  `title` VARCHAR(45) NULL,
  `cover` BLOB NULL,
  `synopsis` VARCHAR(150) NULL,
  PRIMARY KEY (`isbn`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`publisher`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`publisher` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`author`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`author` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`genre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`genre` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`book_has_publisher`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`book_has_publisher` (
  `publisher_id` INT NOT NULL,
  `book_isbn` INT NOT NULL,
  INDEX `fk_book_has_publisher_publisher1_idx` (`publisher_id` ASC) VISIBLE,
  INDEX `fk_book_has_publisher_book1_idx` (`book_isbn` ASC) VISIBLE,
  CONSTRAINT `fk_book_has_publisher_publisher1`
    FOREIGN KEY (`publisher_id`)
    REFERENCES `mydb`.`publisher` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_book_has_publisher_book1`
    FOREIGN KEY (`book_isbn`)
    REFERENCES `mydb`.`book` (`isbn`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`book_has_genre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`book_has_genre` (
  `genre_id` INT NOT NULL,
  `book_isbn` INT NOT NULL,
  INDEX `fk_book_has_genre_genre1_idx` (`genre_id` ASC) VISIBLE,
  INDEX `fk_book_has_genre_book1_idx` (`book_isbn` ASC) VISIBLE,
  CONSTRAINT `fk_book_has_genre_genre1`
    FOREIGN KEY (`genre_id`)
    REFERENCES `mydb`.`genre` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_book_has_genre_book1`
    FOREIGN KEY (`book_isbn`)
    REFERENCES `mydb`.`book` (`isbn`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`book_has_author`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`book_has_author` (
  `author_id` INT NOT NULL,
  `book_isbn` INT NOT NULL,
  INDEX `fk_book_has_author_author1_idx` (`author_id` ASC) VISIBLE,
  INDEX `fk_book_has_author_book1_idx` (`book_isbn` ASC) VISIBLE,
  CONSTRAINT `fk_book_has_author_author1`
    FOREIGN KEY (`author_id`)
    REFERENCES `mydb`.`author` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_book_has_author_book1`
    FOREIGN KEY (`book_isbn`)
    REFERENCES `mydb`.`book` (`isbn`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `dni` VARCHAR(7) NULL,
  PRIMARY KEY (`email`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user_address` (
  `id` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NULL,
  `province` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`phone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`phone` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `area_code` VARCHAR(5) NULL,
  `number` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user_has_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user_has_address` (
  `user_email` VARCHAR(45) NOT NULL,
  `address_id` VARCHAR(45) NOT NULL,
  INDEX `fk_user_has_address_user1_idx` (`user_email` ASC) VISIBLE,
  INDEX `fk_user_has_address_address1_idx` (`address_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_address_user1`
    FOREIGN KEY (`user_email`)
    REFERENCES `mydb`.`user` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_address_address1`
    FOREIGN KEY (`address_id`)
    REFERENCES `mydb`.`user_address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user_has_phone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user_has_phone` (
  `user_email` VARCHAR(45) NOT NULL,
  `phone_id` INT NOT NULL,
  INDEX `fk_user_has_phone_user1_idx` (`user_email` ASC) VISIBLE,
  INDEX `fk_user_has_phone_phone1_idx` (`phone_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_phone_user1`
    FOREIGN KEY (`user_email`)
    REFERENCES `mydb`.`user` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_phone_phone1`
    FOREIGN KEY (`phone_id`)
    REFERENCES `mydb`.`phone` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`sell`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`sell` (
  `order_number` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NULL,
  `delivery_type` VARCHAR(1) NULL,
  `payment_type` VARCHAR(1) NULL,
  `total_quantity` INT NULL,
  `total_cost` DECIMAL(5) NULL,
  PRIMARY KEY (`order_number`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`sell_has_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`sell_has_user` (
  `sell_order_number` INT NOT NULL,
  `user_email` VARCHAR(45) NOT NULL,
  INDEX `fk_sell_has_user_sell1_idx` (`sell_order_number` ASC) VISIBLE,
  INDEX `fk_sell_has_user_user1_idx` (`user_email` ASC) VISIBLE,
  CONSTRAINT `fk_sell_has_user_sell1`
    FOREIGN KEY (`sell_order_number`)
    REFERENCES `mydb`.`sell` (`order_number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sell_has_user_user1`
    FOREIGN KEY (`user_email`)
    REFERENCES `mydb`.`user` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`delivery`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`delivery` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(1) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Shipping_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Shipping_address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(45) NULL,
  `zip_code` VARCHAR(8) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`delivery_has_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`delivery_has_address` (
  `Shipping_address_id` INT NOT NULL,
  `delivery_id` INT NOT NULL,
  INDEX `fk_delivery_has_address_Shipping_address1_idx` (`Shipping_address_id` ASC) VISIBLE,
  INDEX `fk_delivery_has_address_delivery1_idx` (`delivery_id` ASC) VISIBLE,
  CONSTRAINT `fk_delivery_has_address_Shipping_address1`
    FOREIGN KEY (`Shipping_address_id`)
    REFERENCES `mydb`.`Shipping_address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_delivery_has_address_delivery1`
    FOREIGN KEY (`delivery_id`)
    REFERENCES `mydb`.`delivery` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`sell_has_delivery`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`sell_has_delivery` (
  `sell_order_number` INT NOT NULL,
  `delivery_id` INT NOT NULL,
  INDEX `fk_sell_has_delivery_sell1_idx` (`sell_order_number` ASC) VISIBLE,
  INDEX `fk_sell_has_delivery_delivery1_idx` (`delivery_id` ASC) VISIBLE,
  CONSTRAINT `fk_sell_has_delivery_sell1`
    FOREIGN KEY (`sell_order_number`)
    REFERENCES `mydb`.`sell` (`order_number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sell_has_delivery_delivery1`
    FOREIGN KEY (`delivery_id`)
    REFERENCES `mydb`.`delivery` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`payment` (
  `id` INT NOT NULL,
  `card_association` VARCHAR(45) NULL,
  `number` INT NULL,
  `cvv` VARCHAR(4) NULL,
  `expiration` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`sell_has_payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`sell_has_payment` (
  `sell_order_number` INT NOT NULL,
  `payment_id` INT NOT NULL,
  INDEX `fk_sell_has_payment_sell1_idx` (`sell_order_number` ASC) VISIBLE,
  INDEX `fk_sell_has_payment_payment1_idx` (`payment_id` ASC) VISIBLE,
  CONSTRAINT `fk_sell_has_payment_sell1`
    FOREIGN KEY (`sell_order_number`)
    REFERENCES `mydb`.`sell` (`order_number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sell_has_payment_payment1`
    FOREIGN KEY (`payment_id`)
    REFERENCES `mydb`.`payment` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`sell_has_book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`sell_has_book` (
  `book_isbn` INT NOT NULL,
  `sell_order_number` INT NOT NULL,
  INDEX `fk_sell_has_book_book1_idx` (`book_isbn` ASC) VISIBLE,
  INDEX `fk_sell_has_book_sell1_idx` (`sell_order_number` ASC) VISIBLE,
  CONSTRAINT `fk_sell_has_book_book1`
    FOREIGN KEY (`book_isbn`)
    REFERENCES `mydb`.`book` (`isbn`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sell_has_book_sell1`
    FOREIGN KEY (`sell_order_number`)
    REFERENCES `mydb`.`sell` (`order_number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
