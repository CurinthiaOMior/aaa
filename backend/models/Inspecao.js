const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Inspecao = db.define('inspecao', {
    idInspecao: {
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
    idproduto: {
        type: DataTypes.INTEGER,
        references:{
            model:  'produtos',
            key:    'idProduto'
        }
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('pendente' ,'realizada'),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'inspecoes'
})
module.exports = Inspecao