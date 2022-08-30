const mongoose = require("mongoose")
const express = require("express")
const autoRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/auth', autoRouter)

const start = async () => {
  try{
    await mongoose
    .connect('mongodb+srv://MatsveiDubaleka:m29092003O@cluster0.zwuj6px.mongodb.net/auth_roles?retryWrites=true&w=majority')
    .then(() => console.log(`Connected to DB`))
    .catch((e) => console.error((e)))
    app.listen(PORT, () => console.log(` Server has been started ${PORT}`))
  } catch(e) {
    console.log(e);
  }
}

start()
