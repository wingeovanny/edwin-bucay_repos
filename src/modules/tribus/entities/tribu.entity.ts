import { Organizacion } from "src/modules/organizacions/organizacion.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity('tribu')
export class Tribu {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 50, nullable: false })
    name: string;

    @Column({ nullable: false })
    status: number;

    @ManyToOne((type) => Organizacion, (org) => org.tribus, { cascade: true })
    @JoinColumn({ name: "organizacion_id" })
    organizacion: Organizacion;


}