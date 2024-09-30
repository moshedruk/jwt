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
const userModel_1 = __importDefault(require("../types/models/userModel"));
class UserService {
    static signup(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userName, password } = user;
                if (!userName || !password) {
                    return {
                        err: true,
                        message: "Missing required fields",
                    };
                }
                const newuser = new userModel_1.default(userName);
                yield newuser.hashPassword(password);
                let users = yield (0, filedatalayer_1.getFileData)("user");
                if (!users)
                    users = [];
                users.push(newuser);
                yield (0, filedatalayer_1.saveFileData)("user", users);
                return {
                    err: false,
                    message: "User created successfully",
                    data: { id: newuser._id },
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
    static getAllTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            let todos = yield (0, filedatalayer_1.getFileData)("todo");
            if (!todos)
                todos = [];
            return todos;
        });
    }
}
exports.default = UserService;
