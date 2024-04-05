const { schema } = require("../conexoes/postgres");

const validarRequisicao = (schema) => async (req, res, next)=> {
    try{
        await schema.validateAsync(req.body ?? req.file);

        next();

    }catch (error){
        return res.status(400).json({mensagem: error.message});
    }
};
module.exports = validarRequisicao