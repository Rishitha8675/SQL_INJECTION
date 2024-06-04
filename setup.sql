-- Create database
CREATE DATABASE IF NOT EXISTS sql_injection_demo;

-- Use the created database
USE sql_injection_demo;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Insert initial data
INSERT INTO users (username, password) VALUES ('Rishitha', '123456');
INSERT INTO users (username, password) VALUES ('Naveen', 'password123');
INSERT INTO users (username, password) VALUES ('Jay Shree', 'hello');
