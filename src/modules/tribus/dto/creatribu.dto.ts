
import { isNumber, IsObject, IsString } from "class-validator";
import { Organizacion } from "src/modules/organizacions/organizacion.entity";
export class CreateTribuDto {
    @IsString()
    readonly name: string;


    readonly status: number;

    @IsObject()
    readonly user: Partial<Organizacion>;

}
