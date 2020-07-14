import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, BelongsTo, ForeignKey } from "sequelize-typescript";
import User from "./User";

export interface IVehicle{
    id?:number,
    vehicleType:string,
    userId?:number,
    user?:User;
}

@Table(
    {
        tableName: "vehicle",
        timestamps: true
    }
)
export default class Vehicle extends Model<Vehicle> implements IVehicle{

    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number;

    @AllowNull(false)
    @NotEmpty
    @Column
    vehicleType!: string;

    @ForeignKey(() => User)
    @Column
    userId?: number;

    @BelongsTo(() => User)
    user?: User;

}

