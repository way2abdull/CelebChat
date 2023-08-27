import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
} 
const SECRET_KEY= process.env.SECRET_KEY;

const auth = (req:any, res:any, next:any) => {
 
    const token = req.headers.authorization;
    console.log(token);
    
    if (token) {
        
      const decode = jwt.verify(token, SECRET_KEY);
      console.log(decode);
      // req.body.id=decode.id;
      req.user=decode;
    } else {
      res.status(401).json({message: "Unauthorized, please provide token"})
    }
    next();
  }

export {auth};