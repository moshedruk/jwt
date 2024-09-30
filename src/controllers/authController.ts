

import exp,{Router,Request,Response} from 'express'
import todoService from '../services/todoService'
import NewTodoDTO from '../types/DTO/newTodo'


const router:Router = exp.Router()


router.post('/signin', async (req:Request,res:Response):Promise<void> =>{})
router.delete('/signout', async (req:Request,res:Response):Promise<void> =>{})
    
export default router