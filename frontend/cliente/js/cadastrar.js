const input = document.getElementById('input')
const response = document.getElementById('response')

input.addEventListener('click', (e)=>{
   const valores ={
        nome: document.getElementById('nome'), 
        cpf: document.getElementById('cpf') 
    }

    try{
        fetch('http://localhost:3000/cliente',{
            method: 'POST',
            
        })
    }catch(err){

    }
})