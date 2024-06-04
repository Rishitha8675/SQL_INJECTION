
CREATE DATABASE IF NOT EXISTS sql_injection;


USE sql_injection;


CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);


INSERT INTO users (username, password) VALUES ('Rishitha', '123456');
INSERT INTO users (username, password) VALUES ('Naveen', 'password123');
INSERT INTO users (username, password) VALUES ('Jay Shree', 'hello');
