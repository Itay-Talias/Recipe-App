CREATE DATABASE IF NOT EXISTS recipes_app;

USE recipes_app;

-- -----------------------------------------------------
-- Table `recipes_app`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS recipes_info(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    thumbnail VARCHAR(50),
    href VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS ingredients_info(
    id INT PRIMARY KEY AUTO_INCREMENT,
    ingredient VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS dairy_ingredients(
    id INT PRIMARY KEY,
    ingredient VARCHAR(50) NOT NULL,
    FOREIGN KEY(id) REFERENCES ingredients_info(id)
);

CREATE TABLE IF NOT EXISTS gluten_ingredients(
    id INT NOT NULL PRIMARY KEY,
    ingredient VARCHAR(50) NOT NULL,
    FOREIGN KEY(id) REFERENCES ingredients_info(id)
);

CREATE TABLE IF NOT EXISTS recipes_ingredients(
    recipe_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    PRIMARY KEY(recipe_id,ingredient_id),
    FOREIGN KEY(recipe_id) REFERENCES recipes_info(id),
    FOREIGN KEY(ingredient_id) REFERENCES ingredients_info(id)
);
