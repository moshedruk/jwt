import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config'


import todoController from './src/controllers/todoController'
// import userController from './src/controllers/userController'
// import aothController from './src/controllers/authController'
import cookieParser from 'cookie-parser'

const app:Express = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/todo',todoController)
// app.use('/user',userController)
// app.use('/auth',aothController)
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});







app.listen(process.env.PORT, ():void =>console.log(`server is listen... ${process.env.PORT}`))