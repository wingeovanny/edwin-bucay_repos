import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizacion } from '../organizacions/organizacion.entity';
import { Tribu } from '../tribus/entities/tribu.entity';




@Module({
    imports: [TypeOrmModule.forFeature([Organizacion, Tribu])],

})
export class OrganizacionsModule { }
