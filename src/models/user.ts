import  Sequelize, { Model }  from "sequelize";
import { sequelize,postgresConnect } from '../core/db_connection';

class Users extends Model{
    public email!:string;
    public name!:string;
    public password!:string;
    public gender!:Enumerator;
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.NumberDataType

    };

}
Users.init({
    email:{type: Sequelize.STRING},
    name: {type: Sequelize.STRING},
    password: {type: Sequelize.STRING},
    gender: {type: Sequelize.ENUM("Male", "Female")},

},{
    sequelize:sequelize,
    modelName:'Users'
});

export {Users};