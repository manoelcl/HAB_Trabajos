CREATE DATABASE semana9;

USE semana9;

CREATE TABLE user(
	id INT UNSIGNED AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    tlf INT UNSIGNED,
    DNI CHAR(11) NOT NULL,
    country VARCHAR(20),
    cp INT UNSIGNED,
    addr_line1 VARCHAR(50),
    addr_line2 VARCHAR(50),
    PRIMARY KEY (id)
);

ALTER TABLE user DROP COLUMN country, DROP COLUMN cp, DROP COLUMN addr_line1, DROP COLUMN addr_line2;

CREATE TABLE address(
	id INT UNSIGNED AUTO_INCREMENT,
    country VARCHAR(20),
    cp INT UNSIGNED,
    addr_line1 VARCHAR(50),
    addr_line2 VARCHAR(50),
    user_id INT UNSIGNED UNIQUE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);