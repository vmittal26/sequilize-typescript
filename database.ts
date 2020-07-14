import {Sequelize} from "sequelize-typescript"

export const sequelize = new Sequelize('mysql_test', 'root', 'admin', {
   host: 'localhost',
   dialect: 'mysql',
   models: [__dirname + '/models'] 
});