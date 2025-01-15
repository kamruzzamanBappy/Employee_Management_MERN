import cors from 'cors'
import express from 'express'
import connectionToDatabase from './db/db.js'
import authRouter from './routes/auth.js'

connectionToDatabase()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
