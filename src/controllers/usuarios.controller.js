const Usuario = require ("../models/usuario.model");

module.exports = {
  index(req,res){
    res.json({message: "Ola mundo do usuario controller."});
  },
  create(req,res){
    const {nome_usuario, email_usuario, telefone_usuario, cep,logradouro, numero_logra, complemento_logra, bairro, cidade, estado} = req.body;
   
    let data = {};

    
}
}