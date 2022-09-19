import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { triggerAsyncId } from 'async_hooks';
import { Organizacion } from '../organizacions/organizacion.entity';
import { Repositorio } from "../repositorio/repositorios.entity";
import { Tribu } from '../tribus/entities/tribu.entity';
import { MetricasController } from "./metricas.controller";
import { Metricas } from "./metricas.entity";
import { MetricasService } from "./metricas.services";

@Module({
    imports: [TypeOrmModule.forFeature([Metricas, Repositorio, Tribu, Organizacion])],
    controllers: [MetricasController],
    providers: [MetricasService]

})
export class MetricasModule { }
