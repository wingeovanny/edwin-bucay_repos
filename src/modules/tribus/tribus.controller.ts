import { Controller, Get, Param } from "@nestjs/common";
import { Metricas } from "../metricas/metricas.entity";
import { TribuService } from "./tribus.service";

@Controller('tribu')
export class TribuController {

    constructor(private readonly tribuService: TribuService) {

    }

    @Get(':id')
    getMetricas(@Param('id') id: number): Promise<Metricas[]> {

        return this.tribuService.getMetricasRepositorio(id);

    }

}


