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
INSERT INTO user(first_name,last_name,email,tlf,DNI) VALUES
("Irvin","Lethem","ilethem0@google.com.au",993870144,"279948941-9"),
("Kylie","Mungan","kmungan1@howstuffworks.com",497494899,"748551874-7"),
("Yul","Dibbert","ydibbert2@businesswire.com",776631050,"215649413-4"),
("Tamra","Mc Gorley","tmcgorley3@studiopress.com",921948685,"617064473-7"),
("Elmira","Imbrey","eimbrey4@cpanel.net",304168000,"178988896-4");

INSERT INTO address(country,cp,addr_line1,addr_line2,user_id) VALUES
("Indonesia",83297,"98339 Loftsgordon Road","Babakanbandung",1),
("Philippines",44455,"74641 Dwight Avenue","Bilar",2),
("Indonesia",62965,"9510 Milwaukee Street","Sumberejo",3),
("Norway",54756,"8902 Doe Crossing Alley","Steinkjer",4),
("United States",51471,"8616 Stephen Hill","Charleston",5);

SELECT first_name, last_name, tlf FROM user ORDER BY last_name ASC;
SELECT country, COUNT(country) AS n_users FROM address GROUP BY country ORDER BY n_users DESC;

SELECT * FROM user U JOIN address A ON U.id = A.user_id;

ALTER TABLE user ADD age INT UNSIGNED CHECK (age>=18) DEFAULT 18;

UPDATE user SET age=21 WHERE id=1;
UPDATE user SET age=44 WHERE id=2;
UPDATE user SET age=32 WHERE id=3;
UPDATE user SET age=19 WHERE id=4;
UPDATE user SET age=25 WHERE id=5;

SELECT first_name AS Nombre, age AS "Edad maxima" FROM user WHERE age = (SELECT MAX(age) FROM user);