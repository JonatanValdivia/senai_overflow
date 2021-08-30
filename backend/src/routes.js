const routes = require('express').Router();
const postController = require('./Controllers/posts')
const sessionController = require('./Controllers/sessions')
const userController = require ("./Controllers/users")
routes.post('/sessions', sessionController.store);
// app.get('/posts', postController.index);
routes.get('/posts', postController.index);
routes.post("/users", userController.store)


module.exports = routes;