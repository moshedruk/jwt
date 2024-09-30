"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = require("../routers/userRouter");
const router = express_1.default.Router();
router.post('/signup', userRouter_1.handlSignupRequset);
router.get('/profile', () => { });
exports.default = router;
