import {Router,Request,Response} from 'express'
import SignupDTO from '../types/DTO/newUserSignup'
import UserService from '../services/userService'


export  const handlSignupRequset = async (
    req:Request<any,any,SignupDTO>,
    res:Response
): Promise<void> => {
    try{
        console.log("fgf");
        const result = await UserService.signup(req.body)
        if(!result.err){
            res.status(result.status!).json(result)            
        }
        console.log(result);
    }
    catch(err){
        
        console.log(err);
    }
}