const express = require('express');
const morgan = require('morgan');
const recordRouter = require('./routes/recordRouter');
const comicRouter = require('./routes/comicRouter');
const funkoPopRouter = require('./routes/funkoPopRouter')

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/comics', comicRouter);
app.use('/records', recordRouter);
app.use('/funkoPops', funkoPopRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is the express server for the collector app api by Ben Asplund</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}: ${port}/`);
});