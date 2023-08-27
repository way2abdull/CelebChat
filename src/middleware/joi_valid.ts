import {Request,Response} from "express";
import Joi, { date } from "joi";


export class validation {
    static async signupValidate(req:Request,res:Response,next:any){
    
        const Users=Joi.object({
        email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        name:Joi.string().required(),
        password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required().messages({
        "string.pattern.base": `Password should be between 3 to 30 characters and contain letters or numbers only`,
        "string.empty": `Password cannot be empty`,
        "any.required": `Password is required`}),
        gender:Joi.string().required(),
      });
        const result=Users.validate(req.body)
        if(result.error)
        {
            res.status(400).send(result.error);
        }
        else
        {
            next();
        }
    }
    
static async actorValidator(req:Request,res:Response,next:any){
        
        const actorSchema=Joi.object({
        name:Joi.string().required(),
        
    
      });
        const result=actorSchema.validate(req.body)
        if(result.error)
        {
            res.status(400).send(result.error);
        }
        else{
            next();
        }
    }
    
    static async loginValidation(req:Request,res:Response,next:any){
          const isValid=Joi.object({
            email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password:Joi.string().min(5).required()
          })
          let result=isValid.validate(req.body)
          if(result.error)
        {
            res.status(400).send(result.error);
        }
        else{
            next();
        }
    }
    
}