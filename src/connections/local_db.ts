import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize('Advertisement', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres'
});

const postgresConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export {sequelize, postgresConnect}