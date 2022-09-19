import { HttpService } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Metricas } from "../metricas/metricas.entity";
import { Repositorio } from "../repositorio/repositorios.entity";
import { Tribu } from "./entities/tribu.entity";
import { TribuController } from "./tribus.controller";
import { TribuService } from "./tribus.service";

@Module({
    imports: [TypeOrmModule.forFeature([Tribu, Repositorio, Metricas])],
    providers: [TribuService],
    controllers: [TribuController]
})

export class TribusModule { }