import exp,{Router,Request,Response} from 'express'
import todoService from '../services/todoService'
import NewTodoDTO from '../DTO/newTodo'


const router:Router = exp.Router()


router.post('/', async (req:Request,res:Response):Promise<void> =>{
    try{
        const result = await todoService.createNewTodo(req.body)
        if(result){
        res.status(201).json({
            err: false,
            message: 'Login Successful',  
            data:undefined 
        })}
        else{
            throw new Error("cant save user")
        }
    }
    catch(err){
        res.status(404).json({
            err: true,
            message: err|| 'Invalid',
            data: null
        })
    } 
})
router.get('/', async (req:Request,res:Response):Promise<void> =>{
    try{
        const result = await todoService.getAllTodos()
        res.json({
            err: false,
            message: 'getinng Successful',  
            data:result 
        })
    }
    catch(err){
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        })
    } 
})
export default router