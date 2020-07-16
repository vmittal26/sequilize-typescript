import { Transaction } from "sequelize/types";
import { sequelize } from "./../database";
import VehicleType, { IVehicleType } from "./../models/VehicleType";


export const insertVehicles = async (vehicleTypes:IVehicleType[]): Promise<IVehicleType[] | null> => {
  try {
    const result = await sequelize.transaction(
      async (transaction: Transaction) => {
        return VehicleType.bulkCreate(vehicleTypes, {transaction});
      }
    );
    return result;
  } catch (error) {
    // If the execution reaches this line, an error occurred.
    // The transaction has already been rolled back automatically by Sequelize!
    console.log(error);

    return null;
  }
};
