require("dotenv").config();

const express = require('express');

const rotasUsuarios=require('./rotas/rotasUsuarios')
const app = express();

app.use(express.json());


app.use(rotasUsuarios);

const PORT =3000

//app.get('/', (req, res) => {
   // res.send("Servidor conectado")
//})
app.listen(PORT, () => {
    console.log(`conectado na porta ${PORT}`)
});
