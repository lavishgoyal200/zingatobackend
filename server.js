import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

dotenv.config()
// app config
const app=express()
const port=process.env.port;


// middleware
app.use(express.json())
app.use(cors())

connectDB();

//api endpoints
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`server started on http:localhost:${port}`)
})

// mongodb+srv://goyallavish200:<db_password>@cluster0.nhewh.mongodb.net/?