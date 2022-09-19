import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tribu } from "./entities/tribu.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Tribu])]
})

export class TribusModule { }