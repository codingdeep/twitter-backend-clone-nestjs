import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "../common/base.entity";

@Entity({name: 'users'})
class UsersEntity extends BaseEntity {
    @Column({type: 'varchar', nullable: false, length: 56})
    name: string;

    @Column({type: "varchar", unique: true})
    username: string;

    @Column()
    avatar: string

    @Column()
    bio: string

    @Column({type: "int"})
    follower_count: number;
    @Column({type: "int"})
    followee_count: number;
    @Column({type: "bool", default: false})
    verified: boolean;


}

export default UsersEntity;