const express = require ("express");
const app = express();
app.get('/', (req, res) =>{
    res.send("Olá");
});
app.get('/manutencao', (req, res) =>{
    res.sendFile(__dirname + "/views/manutencao.html");
});
app.listen (3000, () => console.log("Servidor Iniciado"));