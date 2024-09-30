
import { Request,Response, NextFunction} from "express";

import jwt, { JwtPayload, TokenExpiredError, VerifyErrors } from "jsonwebtoken";
import RequestWithUser from "../types/reqWithUser";
import tokenPayloadDTO from "../DTO/newTokenpayload";

const VerifyUser = async (
    req: RequestWithUser |Request,
    res: Response,
    next: NextFunction
) =>{
    try{
        const token:string = req.cookies.token || req.headers["token"]
        const payload:tokenPayloadDTO|string = jwt.verify(token,process.env.TOKEN_SECRET as string) as tokenPayloadDTO
        (req as RequestWithUser).user = payload
        next()
    }
    catch(err){
       if(err instanceof TokenExpiredError){
        res.status(401).json({
            err: true,
            message: 'Token expired',
            data: null
        })
        }
        else{
            res.status(401).json({
                err: true,
                message: 'Token is not provided',
                data: null
            })
        }        
       
    }
    
}

export default VerifyUser;