import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OrganizacionDto } from "./dto/organizacion.dto";
import { Organizacion } from "./organizacion.entity";

@Injectable()
export class OrganizacionServices {

    constructor(

        @InjectRepository(Organizacion) private readonly _orgRepository: Repository<Organizacion>) { }

    async getOrganizacions(): Promise<Organizacion[]> {
        return await this._orgRepository.find({ relations: ['tribus'] });

    }

    async getOrganizacion(id: number): Promise<Organizacion> {

        const org: Organizacion = await this._orgRepository.findOne({ where: { id }, relations: ['tribus'] });

        if (!org) {
            throw new NotFoundException("Resorce not found");
        }

        return org;
    }

    async createOrganizacion(req: OrganizacionDto) {

        const org: Organizacion = await this._orgRepository.create(req);

        return this._orgRepository.save(org);
    }

    async updateOrganizacion(id: number, { name, status }: OrganizacionDto) {

        const org: Organizacion = await this._orgRepository.preload({
            id,
            name,
            status
        });

        if (!org) {
            throw new NotFoundException('Objeto no encontrado');
        }

        return org;
    }

    async removeOrganizacion(id: number): Promise<void> {
        const org: Organizacion = await this._orgRepository.findOne({ where: { id } });

        if (!org) {
            throw new NotFoundException('Objeto no encontrado');
        }

        this._orgRepository.remove(org);

    }


}

