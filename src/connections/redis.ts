import {createClient} from 'redis'

let redisClient=createClient();
export const redisstart=()=>{

    redisClient.connect().then(()=>{
        console.log("Redis Connected")
        redisClient.on('error', err => console.log('Redis client error', err));
    });

}
export default redisClient;
// const redisClient = createClient();
        // redisClient.on('error', err => console.log('Redis client error', err));
        // await redisClient.connect();