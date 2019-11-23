//Chama bibliotecas usadas no projeto
const express = require("express")
const mongoose = require("mongoose") 
const bodyParser = require("body-parser") //


const app = express()

// Essa configuracao linka o projeto com o banco, se nao tem esse banco, ele cria automaticamente
// mongoose.connect("mongodb://localhost:27017/reprograma", {useNewUrlParser: true});

mongoose.connect("mongodb+srv://admin:admin123@cluster0-rgedq.mongodb.net/clientes", {useNewUrlParser: true}); //Para subir no seu banco da nuvem

//faz coneccao e fica escutando para verificar erros
let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function(){
  console.log("Conexão feita com sucesso.")
  
})



//rotas
const clientes = require("./routes/clientesRoute")


// app.use(express.json());  //PQ TA USANDO O BODY PARSER

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(express.static("public"));

app.use(bodyParser.json());


app.use("/clientes", clientes) // aqui define que todo endpoint vai ser /cliente


module.exports = app
