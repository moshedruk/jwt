import {Router,Request,Response} from 'express'
import SignupDTO from '../types/DTO/newUserSignup'
import UserService from '../services/userService'
import newTodoDTO from '../types/DTO/newTodo';
import TodoService from '../services/todoService';


export  const handlpostTodoRequset = async (
    req:Request<any,any,newTodoDTO>,
    res:Response
): Promise<void> => {
    try{
        
        const result = await TodoService.createNewTodo(req.body)
        if(!result.err){
            res.status(result.status!).json(result)            
        }
        console.log(result);
    }
    catch(err){
        
        console.log(err);
    }
}