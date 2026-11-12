const Inspecao = require("../models/Inspecao");
CryptoJS = require('crypto-js')

const cadastrar = async(req,res)=>{
    const {idInspecao, idcliente, idproduto, data, estado} = req.body
    
    if(!idcliente || !idproduto || !data || estado) return res.status(401).json({message: 'todos os campos sao obrigatorios'})
        
    try{
        Inspecao.create(idInspecao, idcliente, idproduto, data, estado)
    }catch(err){
        res.status(500).json({message: 'erro'})
    }
}

module.exports = {cadastrar}