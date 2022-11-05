const express = require('express');
const funkoPopRouter = express.Router();

funkoPopRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res) => {
        res.end('Here is the list of all the Funko Pops you have');
    })

    .post((req, res) => {
        res.end(`Will add the Funko Pop: ${req.body.name} with description ${req.body.description}`);
    })

    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /funkoPops');
    })

    .delete((req, res) => {
        res.end('Deleting all Funko Pops');
    });

//funkoPop router for funkoPopId

funkoPopRouter.route('/:funkoPopId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of funkoPop: ${req.params.funkoPopId} to you`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /funkoPops/${req.params.funkoPopId}`);
    })
    .put((req, res) => {
        res.write(`Updating the Funko Pop: ${req.params.funkoPopId}\n`);
        res.end(`Will update the Funko Pop: ${req.body.name}
        with description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting Funko Pop: ${req.params.funkoPopId}`)
    });

    module.exports = funkoPopRouter;



