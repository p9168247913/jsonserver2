const express = require("express")
const cors = require("cors")
const connection = require("./config/db")
require("dotenv").config();

const productRouter = require("./router/productRoutes")

const app = express()
app.use(cors({origin:"*"}));
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use("/products", productRouter)



app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log("Connected to Mongo Atlas")
    }catch(e){
        console.log(e);
        console.log("Could not connect to DB")
    }
    console.log(`Server started on port ${process.env.port}`);
})