import { Double, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BaseEntity } from "typeorm";
import { Repositorio } from "../repositorio/repositorios.entity";

@Entity('metrica')
export class Metricas extends BaseEntity {


    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    coverage: number;

    @Column({ nullable: false })
    bugs: number;

    @Column({ nullable: false })
    vulnerabilits: number;

    @Column({ nullable: false })
    hostpost: number;

    @Column({ nullable: false })
    codesmell: number;

    @ManyToOne(type => Repositorio, repo => repo.metricas, { cascade: true })
    @JoinColumn({ name: "repo_id" })
    repo: Repositorio;

}

