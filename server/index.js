import cors from 'cors'
import express from 'express'
const app = express()
app.use(cors())
app.use(express.json())


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
