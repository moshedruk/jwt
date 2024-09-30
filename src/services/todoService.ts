import NewTodoDTO from "../types/DTO/newTodo"
import fs from "fs/promises"
import todo from "../types/models/TodoModel"
import { getFileData, saveFileData } from "../config/filedatalayer";
import bcrypt from  "bcrypt"
import Todo from "../types/models/TodoModel";

export default class TodoService{
    public static async createNewTodo(newtodo: NewTodoDTO): Promise<boolean> {
        const {title} = newtodo
        if (!title){
            throw new Error("Title is required")
        }
        
        // const hashPassword:string = await bcrypt.hash(newtodo.password,10)
        const todo: Todo = new Todo(title);
        let todos: Todo[] = await getFileData<Todo>("todo") as Todo[];
        if(!todos) todos = [];
        // push
        todos.push(todo);
        // write to file
        return await saveFileData<todo>("todo", todos);
    }
    public static async getAllTodos(): Promise<Todo[]> {     
        
        let todos: Todo[] = await getFileData<Todo>("todo") as Todo[];
        if(!todos) todos = [];      
        
        return todos
    }
}