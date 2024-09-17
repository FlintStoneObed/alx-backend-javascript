const express = require('express');
const countStudents = require('./3-read_file_async'); // Import the function from 3-read_file_async.js

const app = express();
const port = 1245;

// Route for the root URL "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for the "/students" URL
app.get('/students', (req, res) => {
  const database = process.argv[2]; // Get the database path from the arguments

  if (!database) {
    res.status(500).send('Cannot load the database');
    return;
  }

  countStudents(database)
    .then(() => {
      let response = 'This is the list of our students\n';
      response += `Number of students: ${students.length}\n`; // Adjust based on database content
      for (const [field, names] of Object.entries(fields)) {
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      res.send(response.trim());
    })
    .catch((err) => {
      res.status(500).send('Cannot load the database');
    });
});

// Start the server on the defined port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
