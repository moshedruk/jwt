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
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
class User {
    constructor(userName) {
        this.userName = userName;
        this._id = (0, uuid_1.v4)();
    }
    hashPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            this._password = yield bcrypt_1.default.hash(password, 10);
        });
    }
    comparePassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._password)
                throw new Error("Password not set");
            return yield bcrypt_1.default.compare(password, this._password);
        });
    }
}
exports.default = User;
