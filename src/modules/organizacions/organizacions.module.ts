import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizacionController } from './organizacion.controller';
import { Organizacion } from './organizacion.entity';
import { OrganizacionServices } from './organizacion.service';

@Module({
    imports: [TypeOrmModule.forFeature([Organizacion])],
    controllers: [OrganizacionController],
    providers: [OrganizacionServices],
})
export class OrganizacionsModule { }
