/*import mongoose from "mongoose";
import express from "express";
import exphbs from "express-handlebars";

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: "main",
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

async function start() {
    try{
        await mongoose.connect('mongodb+srv://MatsveiDubaleka:64251matvey@cluster0.zwuj6px.mongodb.net/customreviews', {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    } catch(e) {
        throw(e);
    }
}

start().then(r => console.log(r));
 */

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://MatsveiDubaleka:<password>@cluster0.zwuj6px.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});