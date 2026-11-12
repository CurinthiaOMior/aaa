const cors = require('cors')
const express = require("express")
const app = express()
const db = require('./db/conn')

const hostname = 'localhost'
const port = 3000

const clientecontroller = require('./controller/cliente.controller')
const produtocontroller = require('./controller/produto.controller')
const funcionarioscontroller = require('./controller/funcionarios.controller')
const inspecaocontroller = require('./controller/inspecao.controller')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.post('./funcionario', funcionarioscontroller.cadastrar)
app.post('./cliente', clientecontroller.cadastrar)
app.post('./inspecao', inspecaocontroller.cadastrar)
app.post('./produto', produtocontroller.cadastrar)
app.get('./cliente:/id', clientecontroller.consultar)
app.get('./cliente/nome/:nome', clientecontroller.consultarnome)
app.delete('./cliente:/id', clientecontroller.apagar)
app.put('./cliente:/id', clientecontroller.atualizar)

db.sync()
.then((hostname, port)=>{
})
.catch((err)=>{
    console.log(err)
})