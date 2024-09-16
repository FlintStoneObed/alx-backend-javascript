const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;

const app = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
      const dbPath = 'database.csv'; // You can set this path as needed
      countStudents(dbPath)
        .then(() => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end();
        })
        .catch((error) => {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(error.message);
        });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found\n');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed\n');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;
