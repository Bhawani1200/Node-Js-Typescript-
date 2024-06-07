import express from 'express'
import bodyParser from 'body-parser'
import authRoutes from './routes/authRoutes'
import productRoutes from './routes/productRoutes'
import connectDB from './database'
const app=express()
connectDB()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
const PORT=process.env.PORT||5000;
app.use("/api/auth",authRoutes)
app.use("/api/products",productRoutes)
app.listen(PORT,()=>{
    console.log(`The port is running on ${PORT}`)
})