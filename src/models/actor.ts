import Sequelize, { IntegerDataType, Model } from "sequelize";
import { sequelize, postgresConnect  } from "../connections/local_db";

   export class actorSchema extends Model{
        public actor_id!: number;
        public name!: string;
        public gender!:Enumerator;
        public isActive!: boolean;
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.NumberDataType

        };
    }
   actorSchema.init({
    actor_id: {type: Sequelize.NUMBER},
    name: {type: Sequelize.STRING},
    gender: {type: Sequelize.ENUM("Male", "Female")},
    isActive: {type: Sequelize.BOOLEAN}
   },{
    sequelize:sequelize,
    modelName: 'actorSchema',
    tableName: 'actors'
   });
    
// export {SessionSchema};