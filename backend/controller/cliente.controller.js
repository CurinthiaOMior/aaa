const Cliente = require("../models/Cliente");
CryptoJS = require('crypto-js')

const cadastrar = async(req,res)=>{
    const {idCliente, nome, cpf} = req.body
    
    if(!nome || !cpf) return res.status(401).json({message: 'todos os campos sao obrigatorios'})
        
    try{
        const criptocpf = CryptoJS.AES.encrypt(cpf, 'aaa').toString()   
        Cliente.create({
            idCliente: idCliente,
            nome: nome,
            cpf: criptocpf
        })
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'erro'})
    }
}

const consultar = async(req,res)=>{
    const id = req.params.id

    try{

        const cliente = await Cliente.findByPk(id)
        res.status(200).json(cliente)

    }catch(err){
        console.log(err)
        res.status(500).json({message: 'erro'})
    }
}
const apagar = async(req,res)=>{
    const id = req.params.id

    try{

        const cliente = await Cliente.findByPk(id)
        cliente.destroy()
        res.status(200).json({message: 'dados apagados'})

    }catch(err){
        console.log(err)
        res.status(500).json({message: 'erro'})
    }
}
const consultarnome = async(req,res)=>{
    const nome = req.params.nome

    try{

        const cliente = await Cliente.findOne({where:nome})
        res.status(200).json(cliente)
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'erro'})
    }
}
const atualizar = async(req,res)=>{
    const id = req.params.id
    const {idCliente, nome, cpf} = req.body

    try{
        const cliente = await Cliente.findByPk(id)

        const criptocpf = CryptoJS.AES.encrypt(cpf, 'aaa').toString()   
        cliente.update({
            idCliente: idCliente,
            nome: nome,
            cpf: criptocpf
        })
        res.status({message: `cliente: ${nome}: <br>`}, cliente)
        
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'erro'})
    }
}
module.exports = {cadastrar, consultar, consultarnome, atualizar, apagar}