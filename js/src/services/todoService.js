"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filedatalayer_1 = require("../config/filedatalayer");
const TodoModel_1 = __importDefault(require("../types/models/TodoModel"));
class TodoService {
    static createNewTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, completed, userId } = todo;
                if (!title || !userId) {
                    return {
                        err: true,
                        message: "Missing required fields",
                    };
                }
                const newtodo = new TodoModel_1.default(title, userId);
                let todos = yield (0, filedatalayer_1.getFileData)("todo");
                if (!todos)
                    todos = [];
                todos.push(newtodo);
                yield (0, filedatalayer_1.saveFileData)("todo", todos);
                return {
                    err: false,
                    message: "todo created successfully",
                    data: newtodo,
                    status: 201
                };
            }
            catch (err) {
                return {
                    err: true,
                    status: 500,
                    message: "Internal Server Error",
                };
            }
        });
    }
    // public static async createNewTodo(newtodo: NewTodoDTO): Promise<boolean> {
    //     const {title} = newtodo
    //     if (!title){
    //         throw new Error("Title is required")
    //     }
    //     // const hashPassword:string = await bcrypt.hash(newtodo.password,10)
    //     const todo: Todo = new Todo(title);
    //     let todos: Todo[] = await getFileData<Todo>("todo") as Todo[];
    //     if(!todos) todos = [];
    //     // push
    //     todos.push(todo);
    //     // write to file
    //     return await saveFileData<todo>("todo", todos);
    // }
    static getAllTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            let todos = yield (0, filedatalayer_1.getFileData)("todo");
            if (!todos)
                todos = [];
            return todos;
        });
    }
}
exports.default = TodoService;
