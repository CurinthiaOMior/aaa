const Funcionario = require("../models/Funcionario");
CryptoJS = require('crypto-js')


const cadastrar = async(req,res)=>{
    const {idFuncionario, email, senha} = req.body

    if(!email || !senha) return res.status(401).json({message: 'todos os campos sao obrigarios'})
    
        try{
            const senhacript = CryptoJS.AES.encrypt(senha, 'aaa').toString()
            Funcionario.create({
                idFuncionario: idFuncionario,
                email: email,
                senha: senhacript
            })
        }catch(err){
            res.status(500).json({message: 'errado'})
        }
}

module.exports = {cadastrar}