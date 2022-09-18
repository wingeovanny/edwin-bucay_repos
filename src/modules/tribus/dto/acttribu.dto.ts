import { IsString } from "class-validator";

export class UpdateTribuDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly status: number;
}
