const express = require('express');
const comicRouter = express.Router();

comicRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res) => {
        res.end('I will send all the comics to you');
    })

    .post((req, res) => {
        res.end(`Will add the comic: ${req.body.name} with description ${req.body.description}`);
    })

    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /comics');
    })

    .delete((req, res) => {
        res.end('Deleting all comics');
    });

//comic router for comicId

comicRouter.route('/:comicId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of comic: ${req.params.comicId} to you`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /comics/${req.params.comicId}`);
    })
    .put((req, res) => {
        res.write(`Updating the comic: ${req.params.comicId}\n`);
        res.end(`Will update the comic: ${req.body.name}
        with description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting comic: ${req.params.comicId}`)
    });

    module.exports = comicRouter;