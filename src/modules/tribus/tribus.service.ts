import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { triggerAsyncId } from 'async_hooks';
import { Repository } from 'typeorm';
import { Metricas } from '../metricas/metricas.entity';
import { Repositorio } from '../repositorio/repositorios.entity';
import { Tribu } from './entities/tribu.entity';

@Injectable()
export class TribuService {

    constructor(
        @InjectRepository(Tribu) private readonly tribuRepository: Repository<Tribu>,
        @InjectRepository(Repositorio) private readonly repoRepository: Repository<Repositorio>,
        @InjectRepository(Metricas) private readonly metricasRepository: Repository<Metricas>
    ) { }



    async getMetricasRepositorio(id: number): Promise<Tribu[]> {

        let result = await this.tribuRepository
            .query(`select * from  tribu t, repositorio r, metrica m 	where t.id = ${id} 	and t.id = r.tribu_id 	and r.id = m.repo_id`);


        if (result.length == 0) {
            throw new NotFoundException('La tribu no se encuentra registrada');
        }

        if (result[0].coverage < 75) {
            throw new NotFoundException('La Tribu no tiene repositorios que cumplan con la Cobertura necesaria');
        }

        console.log(result);



        if (result[0].coverage > 75 && result[0].state == 'E') {
            return result;
        }



        return result;
    }



}

