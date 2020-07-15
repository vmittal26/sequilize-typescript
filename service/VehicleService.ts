import { IVehicle } from "./../models/Vehicle";
import { sequelize } from "../database";
import Vehicle from "../models/Vehicle";
import { Transaction } from "sequelize/types";
import User from "../models/User";

export const findVehicle = async (): Promise<IVehicle | null> => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const vehicle = Vehicle.findOne({ where: { vehicleType:'Car'} });
      return vehicle;
    });
    return result;
  } catch (error) {
    // If the execution reaches this line, an error occurred.
    // The transaction has already been rolled back automatically by Sequelize!
    console.log(error);

    return null;
  }
};


export const saveVehicle =  async (vehicle:IVehicle): Promise<IVehicle | null> => {
    try {
      const result = await sequelize.transaction(async (transaction:Transaction) => {
        const savedVehicle = Vehicle.create(vehicle, {include: [User], transaction});
        return savedVehicle;
      });
      return result;
    } catch (error) {
      // If the execution reaches this line, an error occurred.
      // The transaction has already been rolled back automatically by Sequelize!
      console.log(error);
  
      return null;
    }
  };