import  express  from "express";
import * as dotenv from "dotenv";
import { postgresConnect } from "./connections/local_db";
import { router } from "./routes/router";
import { redisstart } from "./connections/redis";
dotenv.config();
console.log("starting connection server")

// import swaggerUi from 'swagger-ui-express';
// import swaggerJSDoc from 'swagger-jsdoc'

// const options:swaggerJSDoc.Options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: "Advertisement Management System",
//             version: "1.0.0"
//         },
//         schemas:['http', 'https'],
//         servers: [
//             {
//                 url: "http://localhost:3000/"
//             }
//         ]
//     },
//     apis: ['./swagger/users.servicedoc.yaml'],
// };

const port =process.env.PORT;

const app = express();
postgresConnect();
app.use(express.json());


app.use(router);

// const swaggerDocument = swaggerJSDoc(options);
// app.use('/advtdoc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

redisstart();

app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
});