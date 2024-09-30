"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const todoController_1 = __importDefault(require("./src/controllers/todoController"));
// import userController from './src/controllers/userController'
// import aothController from './src/controllers/authController'
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use('/todo', todoController_1.default);
// app.use('/user',userController)
// app.use('/auth',aothController)
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(process.env.PORT, () => console.log(`server is listen... ${process.env.PORT}`));
