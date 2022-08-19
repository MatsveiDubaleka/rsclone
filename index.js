const mongoose = require("mongoose")
const express = require("express")
const autoRouter = require('./authRouter')
const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use('./auth', autoRouter)

async function start() {
  try{
    await mongoose.connect('mongodb+srv://MatsveiDubaleka:m29092003O@cluster0.zwuj6px.mongodb.net/auth_roles')
    app.listen(PORT, () => {
      console.log(` Server has been started ${PORT}`)
    })
  } catch(error) {
    console.error(error);
  }
}

start()