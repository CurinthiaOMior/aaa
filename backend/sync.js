const db = require('./db/conn')
const  {Produto, Cliente, Inspecao, Funcionario} = require('./models/rell')

async function syncDB() {
    try{
        await db.sync({force:true})
        console.log('sincronizando')
    }catch(err){
        console.log(err)
    }finally{
        await db.close()
        console.log('encerrado')
    }
}
syncDB()