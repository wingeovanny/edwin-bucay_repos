
import { NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repositorio } from "../repositorio/repositorios.entity";
import { CreateMetricasDto } from './dto/create-metricas.dto';
import { Metricas } from './metricas.entity';

export class MetricasService {
    constructor(
        @InjectRepository(Metricas) private readonly metricaRepository: Repository<Metricas>,
        @InjectRepository(Repositorio) private readonly repoRepository: Repository<Repositorio>,
    ) { }

    async getMetricas(): Promise<Metricas[]> {
        return await this.metricaRepository.find({ relations: ['repo'], });
    }


    async crearMetrica(data: CreateMetricasDto): Promise<Metricas> {

        const tuit: Metricas = await this.metricaRepository.create(data);

        return this.metricaRepository.save(tuit);
    }





}