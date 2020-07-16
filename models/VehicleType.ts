import Vehicle, { IVehicle } from "./Vehicle";
import {
  Model,
  Table,
  AutoIncrement,
  PrimaryKey,
  Column,
  AllowNull,
  NotEmpty,
  HasMany,
  Unique,
} from "sequelize-typescript";

export enum VehicleTypeEnum{
    CAR,
    BIKE,
    BUS,
    VAN
}
export interface IVehicleType {
  vehicletype_id?: number;
  vehicle_type: VehicleTypeEnum;
  vehicles?: IVehicle[]
}

@Table({
  tableName: "vehicle_type",
  timestamps: true,
})
export default class VehicleType extends Model<VehicleType> implements IVehicleType {

  @AutoIncrement
  @PrimaryKey
  @Column
  vehicletype_id?: number;

  @AllowNull(false)
  @Unique
  @NotEmpty
  @Column
  vehicle_type!: VehicleTypeEnum;

  @HasMany(() => Vehicle)
  vehicles!: IVehicle[];
  
}
