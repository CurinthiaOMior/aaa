const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Funcionario = db.define('funcionario', {
    idFuncionario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'funcionarios'
})
module.exports = Funcionario