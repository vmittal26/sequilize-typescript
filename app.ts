import { mockVehicle } from './mockData/mockVehicles';
import { insertVehicles } from './service/VehicleTypeService';
import { IVehicle } from "./models/Vehicle";
import { findVehicle, saveVehicle } from "./service/VehicleService";
import { saveUser, findUser } from "./service/UserService";
import { sequelize } from "./database";
import bodyParser from "body-parser";
import express from "express";
import User, { IUser } from "./models/User";
import { vehicleTypes } from './mockData';

const app = express();

app.use(bodyParser.json());



// const vehicle:IVehicle = {
//   vehicleName:'Suzuki',
//   user
// };

// app.use('/' , (req , res , next) => {
//    console.log('In Middleware')
//    res.send('<h1>Hello Express</h1>');
// });

app.listen(5000, async () => {
  console.log(`App runing at http://localhost:5000`);

  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: true });
    // await insertVehicles(vehicleTypes);
    // saveUser(user);
    // const vehicle = await findVehicle();
    // console.log({ vehicle : JSON.parse(JSON.stringify(vehicle))});
    await saveVehicle(mockVehicle);
    // findUser();


  } catch (error) {
    console.log(error.message);
  }
});
