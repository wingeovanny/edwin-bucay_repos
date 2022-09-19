import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repositorio } from './repositorios.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Repositorio])],

})
export class RespositorioModule { }
