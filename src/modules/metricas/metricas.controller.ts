import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateMetricasDto } from "./dto/create-metricas.dto";
import { Metricas } from "./metricas.entity";
import { MetricasService } from "./metricas.services";

@Controller('metricas')
export class MetricasController {

    constructor(private readonly metricaService: MetricasService) {

    }


    @Get()
    getTuits(): Promise<Metricas[]> {
        return this.metricaService.getMetricas();
    }


    @Post()
    createTuit(@Body() data: CreateMetricasDto): Promise<Metricas> {
        console.log(data instanceof Metricas);



        return this.metricaService.crearMetrica(data);
    }

}