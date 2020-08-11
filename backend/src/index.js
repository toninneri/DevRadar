const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

//metodos http; get,post, put, delete
//Tipos de parametros
//Query Params: request.query(filtros, ordenação,paginação...)
//Route Params: requst.params(identificar um recurso na alteração ou remoção)
//Body: request.body(Dados para criação ou alteração de registro)
//MongoDB
const app = express();
const server = http.Server(app);
setupWebsocket(server);
mongoose.connect('mongodb+srv://tomnistack:lamuria@cluster0-so6q6.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

