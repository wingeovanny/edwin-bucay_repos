import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tribu } from '../tribus/entities/tribu.entity';
import { OrganizacionController } from './organizacion.controller';
import { Organizacion } from './organizacion.entity';
import { OrganizacionServices } from './organizacion.service';

@Module({
    imports: [TypeOrmModule.forFeature([Organizacion, Tribu])],
    providers: [OrganizacionServices],
    controllers: [OrganizacionController],
})
export class OrganizacionsModule { }
