import User, { IUser } from "../models/User";
import { sequelize } from "../database";
import Vehicle from "../models/Vehicle";

export const saveUser = async (user: IUser): Promise<IUser | null> => {
  try {
    const result: IUser = await sequelize.transaction(async (t) => {
      const savedUser = await User.create(user, {include: [Vehicle], transaction: t });
      return savedUser;
    });
    return result;
  } catch (error) {
    // If the execution reaches this line, an error occurred.
    // The transaction has already been rolled back automatically by Sequelize!
    console.log(error);

    return null;
  }
};


export const findUser = ()=> {
  User.findOne({
    where: {lastName: 'Arora'},
    attributes: ['id', ['email', 'mail']]
  }).then(user => {
    console.log({user:JSON.parse(JSON.stringify(user))});
  })
}