import NewSignupDTO from "../types/DTO/newUserSignup"
import fs from "fs/promises"
import todo from "../types/models/TodoModel"
import { getFileData, saveFileData } from "../config/filedatalayer";
import bcrypt from  "bcrypt"
import Todo from "../types/models/TodoModel";
import ResponsData from "../types/DTO/responsData";
import User from "../types/models/userModel";

export default class UserService{
    public static async signup(user: NewSignupDTO): Promise<ResponsData<{id:string}>> {
        try{           

            const {userName,password} = user 
            if (!userName||!password) {
                return{
                    err: true,
                    message: "Missing required fields",
                }
            }
            const newuser: User = new User(userName);
            await newuser.hashPassword(password)
            let users: User[] = await getFileData<User>("user") as User[];
            if(!users) users = [];        
            users.push(newuser);            
            await saveFileData<User>("user", users);
            return {
                err: false,
                message: "User created successfully",
                data: {id : newuser._id},
                status:201
            }          
             
        }
        catch (err){
            return{
                err: true,
                status: 500,
                message: "Internal Server Error",
            }
        }
    }
       
    public static async getAllTodos(): Promise<Todo[]> {     
        
        let todos: Todo[] = await getFileData<Todo>("todo") as Todo[];
        if(!todos) todos = [];      
        
        return todos
    }
}