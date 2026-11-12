const Produto = require("../models/Produto");
CryptoJS = require('crypto-js')


const cadastrar = async(req,res)=>{
    const {idProduto, idcliente, fabricante, numero} = req.body

    if(!idcliente || !fabricante || !numero) return res.status(401).json({message: 'todos os campos sao obrigarios'})
    
        try{
            const numerocript = CryptoJS.AES.encrypt(numero, 'aaa').toString()
            Produto.create({
                idProduto: idProduto,
                idcliente: idcliente,
                fabricante: fabricante,
                numero: numerocript
            })
        }catch(err){
            res.status(500).json({message: 'errado'})
        }
}

module.exports = {cadastrar}