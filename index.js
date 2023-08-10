import express from "express"
import connectDB from "./Database/db.js"
import userRoutes from './routes/user.Routs.js'

connectDB()
 const app = express()

 app.use(express.json())
 app.use('/api/user',userRoutes)





 const port=5000
 app.listen(()=>{
    console.log(`server is runing on port${port}`)
 })