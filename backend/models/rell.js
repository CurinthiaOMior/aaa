const Cliente = require("./Cliente");
const Funcionario = require("./Funcionario");
const Produto = require("./Produto");
const Inspecao = require('./Inspecao')

Produto.hasMany(Inspecao,{
    foreignKey: 'idproduto',
    as: 'produtoinspecao',
    onDelete: 'CASCADE'
})
Inspecao.belongsTo(Produto,{
    foreignKey: 'idproduto',
    as: 'inspecaoproduto',
})

Cliente.hasMany(Inspecao,{
    foreignKey: 'idcliente',
    as: 'clienteinspecao',
    onDelete: 'CASCADE'
})
Inspecao.belongsTo(Cliente,{
    foreignKey: 'idcliente',
    as: 'inspecaocliente',
})

Cliente.hasMany(Produto,  {
    foreignKey: 'idcliente',
    as: 'produtocliente',
    onDelete: "CASCADE"
})
Produto.belongsTo(Cliente, {
    foreignKey: 'idcliente',
    as: 'clienteproduto'
})


module.exports = {Produto, Cliente, Inspecao, Funcionario}