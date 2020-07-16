import VehicleType, { IVehicleType } from "./VehicleType";
import {
  Model,
  Table,
  AutoIncrement,
  PrimaryKey,
  Column,
  AllowNull,
  NotEmpty,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";

import User, { IUser } from "./User";

export interface IVehicle {
  vehicle_id?: number;
  vehicle_name: string;
  user_id?: number;
  user?: IUser;
  vehicletype_id:number;
  vehicle_type?: IVehicleType;
}

@Table({
  tableName: "vehicle",
  timestamps: true,
})
export default class Vehicle extends Model<Vehicle> implements IVehicle {
  @AutoIncrement
  @PrimaryKey
  @Column
  vehicle_id?: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  vehicle_name!: string;

  @ForeignKey(() => User)
  @Column
  user_id?: number;

  @BelongsTo(() => User , 'user_id')
  user?: IUser;

  @ForeignKey(() => VehicleType)
  @Column
  vehicletype_id!: number;

  @BelongsTo(() => VehicleType , 'vehicletype_id')
  vehicle_type!: IVehicleType;
}
