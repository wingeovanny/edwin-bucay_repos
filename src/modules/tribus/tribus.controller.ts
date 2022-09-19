import { Controller, Get, Param } from "@nestjs/common";
import { response } from "express";
import { Metricas } from "../metricas/metricas.entity";
import { Tribu } from "./entities/tribu.entity";
import { TribuService } from "./tribus.service";

@Controller('tribu')
export class TribuController {

    constructor(private readonly tribuService: TribuService) {

    }

    @Get(':id')
    getMetricas(@Param('id') id: number) {

        return this.tribuService.getMetricasRepositorio(id);


    }



}


