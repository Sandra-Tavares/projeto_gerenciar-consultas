const knex = require("../conexoes/postgres");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const {email, senha} = req.body;

    try {
        const usuario = await knex("usuarios").where({email}).first();
        if(!usuario) {
            return res.status(404).json({mensagem: "O usuário não foi encontrado"});
        }
        const senhaCorreta = await bcrypt.compare(senha,usuario.senha);
        if (!senhaCorreta) {
            return res.status(400).json({mensagem:"Senha incorreta"});
        }
        const token = jwt.sign({id:usuario.id}, process.env.SENHA_JWT, {expiresIN: "8h"});

        const {senha:_, ...dadosUsuario} = usuario;

        return res.status(200).json({
            usuario:dadosUsuario,
            token
        })
    } catch (error){
        console.log(error)
        return res.status(500).json({mensagem: "erro interno do servidor"});

    }
};

module.exports = login