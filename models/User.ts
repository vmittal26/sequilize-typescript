import Vehicle, { IVehicle } from './Vehicle';
import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, HasMany } from "sequelize-typescript";

export interface IUser{
    user_id?: number | null
    first_name: string
    last_name: string
    email: string
    password: string
    user_address:string
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
    user_id?: number
    
    @AllowNull(false)
    @NotEmpty
    @Column
    first_name!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    last_name!: string;

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
    user_address!: string;

    @HasMany(() => Vehicle)
    vehicles!:IVehicle[];

}