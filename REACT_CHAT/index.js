'use strict'; 

var PeertoPeerServer = require('peer').PeerServer; //запрос зависимостей
var express= require('express');
var Actions = require('./public/src/Action.js')
var app = express();
var port = process.env.PORT || 3333; // передаем через dotenv переменную PORT

app.use(express.static(__dirname+'public'));

//связываем сервер с sockets
var server = app.listen(port);

//завязываем connect/disconnect на сокеты
var io = require('socket.io').listen(server);

console.log(`Server is up on ${port} port`)

var p2pServer = new PeertoPeerServer({ port: 9000,path: '/chat'});

p2pServer.on('connection',function(id){
    io.emit(Actions.USER_CONNECTED,id);
    console.log(`User connection with #${id} established`);
})

p2pServer.on('disconnect',function(id){
    io.emit(Actions.USER_DISCONNECTED,id);
    console.log(`#${id} has leaved the chat!`);
});