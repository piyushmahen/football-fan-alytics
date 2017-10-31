const express = require('express');

const app = express();
const path = require('path');

// viewed at http://localhost:8080
app.get('/dashboard**', (req, res) => {
  res.sendFile(path.join(`${__dirname}/static/index.html`));
});

app.use(express.static('static'));

app.listen(8080);
