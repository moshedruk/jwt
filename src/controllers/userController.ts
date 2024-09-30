
import exp,{Router,Request,Response} from 'express'
import todoService from '../services/todoService'
import NewTodoDTO from '../types/DTO/newTodo'
import { handlSignupRequset } from '../routers/userRouter'


const router:Router = exp.Router();


router.post('/signup',handlSignupRequset)



router.get('/profile',()=>{})

export default router