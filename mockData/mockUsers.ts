import { VehicleTypeEnum } from './../models/VehicleType';
import { IUser } from './../models/User';
export const mockUser: IUser = {
  first_name: "Mohan",
  last_name: "Arora",
  email: "ma@gmail.com",
  password: "ma",
  user_address: "ma",
  vehicles: [
    {
      vehicle_name:'Yamaha',
      vehicletype_id:VehicleTypeEnum.BIKE,
      vehicle_id:12121
    }
  ],
};