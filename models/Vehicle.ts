import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, BelongsTo, ForeignKey } from "sequelize-typescript";
import User, {IUser} from "./User";

export interface IVehicle{
    id?:number,
    vehicleType:string,
    vehicleName:string,
    userId?:number,
    user?:IUser;
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

    
    @AllowNull(false)
    @NotEmpty
    @Column
    vehicleName!: string;

    @ForeignKey(() => User)
    @Column
    userId?: number;

    @BelongsTo(() => User)
    user?: IUser;

}

