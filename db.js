
    const mysql = require("mysql2");
    const express=require("express");
    const bodyParser=require("body-parser");


    const app=express()
    const port=3000

    app.use(bodyParser.urlencoded({extended: true}))

    const connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'pudimazul123',
        database:'crud'
    });

    connection.connect((err)=>{
        if(err){
            console.error("Erro ao conectar ao MySQL", err);
        }
        else{
            console.log("Conexão bem sucedida ao MySQL");
        }
        
    })

//Não está rodando
    app.post("/cadastro", (req, res)=>{
        alert("AAAAAAA");
        const{name,email,senha}=req.body;
        console.log(name,email,senha)

        const query='INSERT INTO users (nome, email, senha) VALUES(?,?,?)';
        connection.query(query, [name, email, senha],(err, results)=>{
            if(err){
                console.error("Erro ao cadastrar usuário", err);
                res.send("Erro ao cadastrar usuário.");
            }
            else{
                console.log("Usuário cadastrado");
                res.send("Usuario cadastrado");
            }
        })

    })
//Até aqui
    app.listen(port,()=>{
        console.log(`Servidor rodando em https://localhost:${port}`)
    })

    module.exports={}


