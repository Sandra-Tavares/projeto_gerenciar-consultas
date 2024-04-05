const knex = require("../conexoes/postgres");

const cadastrarUsuario = async (req, res) => {
const{nome, email, senha, cpf} = req.body;

const verificarCPF = await knex("usuarios").where({cpf}).first();

if (verificarCPF) {
    return res.status(400).json({mensagem: "CPF já cadastrado"})
}
try{
    const cadastroUsuario = await knex("usuarios")
    .insert({nome, cpf, email, senha})
    .returning("*")

    return res.status(201).json(cadastroUsuario)

} catch (error) {
    console.log({mensagem: error});
    return res.status(500).json({mensagem: "erro intero do servidor"})
}

};



module.exports = {
    cadastrarUsuario
};