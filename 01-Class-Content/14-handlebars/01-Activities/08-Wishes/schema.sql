CREATE DATABASE wishes_db;
USE wishes_db;

CREATE TABLE wishes (
    id INT NOT NULL AUTO_INCREMENT,
    wish VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
)

