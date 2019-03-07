DROP DATABASE IF EXISTS sequelize_burgers_db;

CREATE DATABASE sequelize_burgers_db;

-- USE sequelize_burgers_db;
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgerName varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
