import { IsNumber, IsObject, IsString } from "class-validator";
import { Tribu } from "src/modules/tribus/entities/tribu.entity";

export class CreateOrganizacionDto {

    @IsString()
    readonly name: string;

    @IsNumber()
    readonly status: number;

    @IsObject()
    readonly tribus: Partial<Tribu>;


}