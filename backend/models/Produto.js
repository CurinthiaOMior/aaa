const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto', {
    idProduto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idcliente: {
        type: DataTypes.INTEGER,
        references:{
            model:  'clientes',
            key:    'idCliente'
        }
    },
    fabricante: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'produtos'
})
module.exports = Produto