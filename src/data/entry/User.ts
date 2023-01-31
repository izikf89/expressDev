import { IsString } from "class-validator"
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @IsString()
    @Column()
    name: string
}
