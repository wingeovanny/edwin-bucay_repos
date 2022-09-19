import { IsNumber, IsString } from "class-validator";

export class UpdateOrgDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly status: number;
}
