const express = require('express');
const app = express();
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send("Hi, i am live.")
})

// Middleware
app.use("/api/products", products_routes);

const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, ()=>{
            console.log('listening on port '+PORT);
        })
    }
    catch(error){
        console.log(error);
    }
}

start();