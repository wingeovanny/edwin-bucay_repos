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
        @InjectRepository(Metricas) private readonly metricasRepository: Repository<Metricas>,
    ) { }

    async getMetricasRepositorio(id: number): Promise<Metricas[]> {

        let result = await this.tribuRepository
            .query(`select * from  tribu t, repositorio r, metrica m 	where t.id = ${id} 	and t.id = r.tribu_id 	and r.id = m.repo_id`);



        if (result.length == 0) {
            throw new NotFoundException('La tribu no se encuentra registrada');
        }

        // if (result[0].state === 'ENABLE')

        /*                 
        Entonces me retornará el detalle de las métricas de los repositorios creados este año
        Y que se encuentren habilitados (state: ENABLE)
        Y que su cobertura sea superior a 75%
 
        {
  id: 1,
  name: 'mio',
  status: '2',
  organizacion_id: null,
  state: '2',
  create_time: 2022-09-19T07:38:38.813Z,
  tribu_id: 1,
  coverage: 100,
  bugs: 200,
  vulnerabilits: 300,
  hostpost: 500,
  codesmell: 600,
  repo_id: 1
}
        
         */



        let porcentaje = result[0]

        console.log(porcentaje);

        if (porcentaje.bugs > 100) {
            throw new NotFoundException('Menor a 100');
        }


        console.log(porcentaje);


        return result;
    }

}
