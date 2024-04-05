const express = require('express');

const { cadastrarUsuario } = require('../controladores/usuarios');

const rotasUsuarios = express()

rotasUsuarios.post("/usuarios", cadastrarUsuario)

module.exports = rotasUsuarios