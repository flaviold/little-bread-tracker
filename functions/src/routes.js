const { Router } = require('express');

const TimestampController = require('./controllers/TimestampController');

const routes = new Router();

routes.get('/api/timestamps', TimestampController.index);

module.exports = routes;