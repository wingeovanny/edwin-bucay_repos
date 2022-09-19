import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Repositorio } from "../repositorio/repositorios.entity";
import { MetricasController } from "./metricas.controller";
import { Metricas } from "./metricas.entity";
import { MetricasService } from "./metricas.services";

@Module({
    imports: [TypeOrmModule.forFeature([Metricas, Repositorio])],
    controllers: [MetricasController],
    providers: [MetricasService]

})
export class MetricasModule { }
