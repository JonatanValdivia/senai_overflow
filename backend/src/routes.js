const routes = require('express').Router();
const postController = require('./Controllers/posts');
const sessionController = require('./Controllers/sessions');
const userController = require ("./Controllers/users");
const authMiddleware = require('./middlewares/auth');

// Rotas públicas
routes.post('/sessions', sessionController.store);
routes.post("/users", userController.store);

routes.use(authMiddleware);
// app.get('/posts', postController.index);
//Rotas privadas
routes.get('/posts', authMiddleware, postController.index);



module.exports = routes;