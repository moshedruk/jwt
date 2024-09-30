"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
// import postController from './src/controllers/postController'
// import userController from './src/controllers/userController'
// import aothController from './src/controllers/authController'
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// app.use('/post',postController)
// app.use('/user',userController)
// app.use('/auth',aothController)
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(process.env.PORT, () => console.log(`server is listen... ${process.env.PORT}`));
