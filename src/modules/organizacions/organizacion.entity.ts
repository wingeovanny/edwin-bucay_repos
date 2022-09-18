import { Entity, PrimaryGeneratedColumn, Column, OneToMany, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { Tribu } from "../tribus/entities/tribu.entity";


@Entity('organizacion')
export class Organizacion {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 50, nullable: false })
    name: string;

    @Column({ nullable: false })
    status: number;

    @OneToMany((type) => Tribu, tribu => tribu.organizacion)
    tribus: Tribu[];


}