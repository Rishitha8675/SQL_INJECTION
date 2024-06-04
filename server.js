const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // replace with your MySQL username
  password: 'root password', // replace with your MySQL password
  database: 'sql_injection_demo'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1); // Exit the application if connection fails
  }
  console.log('Connected to MySQL!');
});

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// SQL Injection vulnerable endpoint
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  console.log('Executing query:', query);

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (results.length > 0) {
      res.send('Login successful!');
    } else {
      res.send('Invalid username or password.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
