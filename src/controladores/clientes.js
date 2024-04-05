const knex = require("../conexoes/postgres");

const cadastrarCliente = async (req, res)=> {
    const {nome, email, telefone, data_Nasc, idade,   } = req.body
}