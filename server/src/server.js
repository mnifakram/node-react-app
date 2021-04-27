// Create an experss server and export it
const express = require('express');
const http = require("http");
const app = express();
const path = require("path");

const distFolder = path.resolve(__dirname, '..', '..', 'client', 'dist');

app.use(express.static(distFolder));


// when no routes matches fallback to the frontend
app.use((req, res, next) => {
  res.sendFile(path.join(distFolder, "index.html"));
});

const server = http.createServer(app);

module.exports = server;