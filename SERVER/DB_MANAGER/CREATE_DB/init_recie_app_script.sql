CREATE DATABASE IF NOT EXISTS recipes_app;

USE recipes_app;

-- -----------------------------------------------------
-- Table `recipes_app`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS dairy_ingredients(
    id INT PRIMARY KEY AUTO_INCREMENT,
    ingredient_name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS gluten_ingredients(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ingredient_name VARCHAR(50) NOT NULL
);