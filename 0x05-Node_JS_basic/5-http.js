const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    const database = process.argv[2]; // Database path passed as argument

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    countStudents(database)
      .then((studentsData) => {
        res.end(studentsData); // Outputting students information
      })
      .catch((error) => {
        res.end(error.message); // Handling error and ending response
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(1245);

module.exports = app;
