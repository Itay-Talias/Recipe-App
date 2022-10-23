CREATE DATABASE IF NOT EXISTS recipes_app;

USE recipes_app;

-- -----------------------------------------------------
-- Table `recipes_app`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS dairy_ingredients(
    ingredient_name VARCHAR(50) NOT NULL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS gluten_ingredients(
    ingredient_name VARCHAR(50) NOT NULL PRIMARY KEY
);