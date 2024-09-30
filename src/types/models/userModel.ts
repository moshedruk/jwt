import {v4} from "uuid"
import bcrypt from "bcrypt"


export default class User {
    public _id: string
    private password?: string
    constructor(public userName:string)
    {
        this._id = v4()        
    }
    async hashPassword(password:string): Promise<void>{
        this.password = await bcrypt.hash(password, 10)
    }
    async comparePassword(password:string): Promise<boolean>{
        if(!this.password) throw new Error("Password not set")
        return await bcrypt.compare(password, this.password)
    }    
 }
    
