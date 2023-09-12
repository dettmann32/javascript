const express = require('express')
const app = express()
const porta = process.env.PORT || 3000
const Sequelize = require('sequelize')
const sequelize = new Sequelize('Cadastro','root','',{
    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{console.log('Conectado com sucesso')}).catch(()=>{console.log('falha ao conectar-se')})


const Usuarios = sequelize.define('usuarios2',{
    titulo:{
        type: Sequelize.STRING,

    },
    conteudo:{
        type:Sequelize.TEXT
    }
});

app.post('/rota',(req,res)=>{
    res.send('formulario')
})

Usuarios.sync({force:true})


app.listen(porta)
