const express = require('express');

const app = express();

app.use(express.json());

const PORT =3000

app.get('/', (req, res) => {
    res.send("Servidor conectado")
})
app.listen(PORT, () => {
    console.log(`conectado na porta ${PORT}`)
});
