import User, { IUser } from "../models/User";
import { sequelize } from "../database";

export const saveUser = async (user: IUser): Promise<IUser | null> => {
  try {
    const result: IUser = await sequelize.transaction(async (t) => {
      const savedUser = await User.create(user, { transaction: t });
      //@ts-ignore
      // await user.saveVehicles(user.vehicles ,  { transaction: t });
      return savedUser;
    });
    return result;
  } catch (error) {
    // If the execution reaches this line, an error occurred.
    // The transaction has already been rolled back automatically by Sequelize!

    return null;
  }
};
