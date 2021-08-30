const express = require("express");
require('./database');
const routes = require('./routes')
const app = express();

app.use(express.json()) // dizemos ao express que ele pode aceitar json

app.use(routes);

module.exports = app //Exportando o app
