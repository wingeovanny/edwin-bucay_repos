import { IsNumber, IsObject, IsString } from "class-validator";
import { Repositorio } from "src/modules/repositorio/repositorios.entity";

export class CreateMetricasDto {

    @IsNumber()
    coverage: number;

    @IsNumber()
    bugs: number;

    @IsNumber()
    vulnerabilits: number;

    @IsNumber()
    hostpost: number;

    @IsNumber()
    codesmell: number;

    @IsObject()
    readonly repo: Partial<Repositorio>;

}
