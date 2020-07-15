
import { IVehicle } from './models/Vehicle';
import { findVehicle, saveVehicle } from "./service/VehicleService";
import { saveUser, findUser } from "./service/UserService";
import { sequelize } from "./database";
import bodyParser from "body-parser";
import express from "express";
import User, { IUser } from "./models/User";

const app = express();

app.use(bodyParser.json());

// User.findAll().then((user: any) => {
//   console.info(user);
// });

const user: IUser = {
  firstName: "Mohan",
  lastName: "Arora",
  email: "ma@gmail.com",
  password: "ma",
  userAddress: "ma",
  vehicles: [
    {
      vehicleType: "Bike",
      vehicleName:'Yamaha'
    },
  ],
};

const vehicle:IVehicle = {
  vehicleType: "Bike",
  vehicleName:'Suzuki',
  user
};

// app.use('/' , (req , res , next) => {
//    console.log('In Middleware')
//    res.send('<h1>Hello Express</h1>');
// });

app.listen(5000, () => {
  console.log(`App runing at http://localhost:5000`);
  sequelize
    .authenticate()
    .then(async () => {
      console.log("database connected");

      try {
        await sequelize.sync();
        // saveUser(user);
        // const vehicle = await findVehicle();
        // console.log({ vehicle : JSON.parse(JSON.stringify(vehicle))});
        // saveVehicle(vehicle);
        findUser();
      } catch (error) {
        console.log(error.message);
      }
    })
    .catch((e: any) => {
      console.log(e.message);
    });
});
