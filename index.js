// requires iniciais
const dotenv = require("dotenv")
dotenv.config({path: "./.env"})
const mongoose = require('mongoose')
const express = require('express')
const app = express()


// como ler o JSON
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

  
//rota inicial - endpoint
app.get('/', (req, res) => {  
  res.json({message: 'Funcionou'})
})

// conectar ao banco de dados

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.cal7nfv.mongodb.net/banco-api?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('conectado')
  })
  .catch((err) => console.log(err))

// entregar uma porta
app.listen(3000, () => console.log('Rodando na 3000'));