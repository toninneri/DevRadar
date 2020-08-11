const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
//const axios = require('axios');
const routes = Router();
//const Dev = require('./models/Dev');

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store );
routes.get('/search', SearchController.index );

module.exports = routes;