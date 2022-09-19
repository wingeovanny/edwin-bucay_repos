import { Organizacion } from "src/modules/organizacions/organizacion.entity";
import { Repositorio } from "src/modules/repositorio/repositorios.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";

@Entity('tribu')
export class Tribu {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 50, nullable: false })
    name: string;

    @Column({ nullable: false })
    status: number;

    @OneToMany((type) => Repositorio, (repo) => repo.tribu)
    repos: Repositorio[];

    @ManyToOne((type) => Organizacion, (org) => org.tribus, { cascade: true })
    @JoinColumn({ name: "organizacion_id" })
    organizacion: Organizacion;


}