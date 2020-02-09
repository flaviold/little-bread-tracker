const { Router } = require('express');

const TimestampController = require('./controllers/TimestampController');
const UserController = require('./controllers/UserController');

const routes = new Router();

routes.get('/api/timestamps', TimestampController.index);
routes.get('/api/users', UserController.index);

module.exports = routes;