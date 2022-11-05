const express = require('express');
const recordRouter = express.Router();

recordRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res) => {
        res.end('I will send all the records to you');
    })

    .post((req, res) => {
        res.end(`Will add the record: ${req.body.name} with description ${req.body.description}`);
    })

    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /records');
    })

    .delete((req, res) => {
        res.end('Deleting all records');
    });

//record router for recordId

recordRouter.route('/:recordId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of record: ${req.params.recordId} to you`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /records/${req.params.recordId}`);
    })
    .put((req, res) => {
        res.write(`Updating the record: ${req.params.recordId}\n`);
        res.end(`Will update the record: ${req.body.name}
        with description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting record: ${req.params.recordId}`)
    });

    module.exports = recordRouter;