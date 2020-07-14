import Vehicle, { IVehicle } from './Vehicle';
import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, HasMany } from "sequelize-typescript";

export interface IUser{
    id?: number | null
    firstName: string
    lastName: string
    email: string
    password: string
    userAddress:string
    vehicles: IVehicle[];
}

@Table(
    {
        tableName: "user",
        timestamps: true
    }
)
export default class User extends Model<User> implements IUser{
    
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number
    
    @AllowNull(false)
    @NotEmpty
    @Column
    firstName!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    lastName!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    email!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    password!: string;


    @AllowNull(false)
    @NotEmpty
    @Column
    userAddress!: string;

    @HasMany(() => Vehicle)
    vehicles!:IVehicle[];

}