import { IsString } from "class-validator";

export class OrganizacionDto {

    @IsString()
    name: string;

    status: number;



}