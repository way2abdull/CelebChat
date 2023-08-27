import Sequelize, { IntegerDataType, Model } from "sequelize";
import { sequelize, postgresConnect  } from "../connections/local_db";

   export class SessionSchema extends Model{
        public user_id!: number;
        public device_type!: string;
        public isActive!: boolean;
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.NumberDataType

        };
    }
   SessionSchema.init({
    user_id: {type: Sequelize.NUMBER},
    device_type: {type: Sequelize.STRING},
    isActive: {type: Sequelize.BOOLEAN}
   },{
    sequelize:sequelize,
    modelName: 'SessionSchema',
    tableName: 'sessions'
   });
    
// export {SessionSchema};