import { createClient } from "redis";
import redisClient from "../core/redis_connect";
import {SessionSchema} from '../models/session'
import { Request,Response } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { Op } from 'sequelize'

dotenv.config();
// const client = createClient();
// client.connect();
// client.on('error', err => console.log('unable to connect reddis client', err));

export class Redis {
    static async rediss_session(client:any,user:any, device:any) {
        try {
            // client.on('error', err => console.log('Redis client error', err));
            if (user) {
                await client.SET(user.email, JSON.stringify({
                    user_id: user.id,
                    device_id: device,
                    isActive: true
                }));
                //getting created redis
                const redisSession = await client.get(user.email);
                console.log(redisSession);
            }
            else {
                console.log("User not found");
            }
        }
        catch (err) {
            console.log("Redis session creation failed", err);
        }
    }

    static async logout_session_redis(client:any, user:any) {
        console.log("redis logout ",user.name);
        try {
            await client.del(user.name);
            console.log("Delition successfully");
        }
        catch (err) {
            console.log("Failed to delete", err);
        }
    }

}


export const sessionCheck=async (req:Request,res:Response,next:()=>void)=>{
  const SECRET_KEY=process.env.SECRET_KEY
  const token=req.headers.authorization
  let decode:any;
  try{ 
        decode= jwt.verify(token,SECRET_KEY)
        req.body.id=decode?.id;
        let redisData:any=await redisClient.get(`${decode?.email}`)
        console.log(redisData);
        if(!(redisData.isActive==true)){
            console.log("No sesion found")
        let data=await SessionSchema.findOne({
            where:{
                    [Op.and]: [
                      { userId: decode?.email },
                      { isActive: true }
                    ]      
                }
            })
            console.log(data,decode.email,typeof decode.email)
            data=JSON.parse(JSON.stringify(data))
            console.log(data)
            if(data)
            {
              redisClient.setEx(`${decode?.email}`,3600,"true")
              next()
            }else{
                res.send("Authentication error")
            }
        }else {
            console.log("session found")
            next()
        }
    }catch(err){
        console.log(err);
    res.status(400).send(err)
  }
}