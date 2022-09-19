import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tribu } from "../tribus/entities/tribu.entity";
import { CreateOrganizacionDto } from "./dto/create-organizacion.dto";
import { UpdateOrgDto } from "./dto/update-org.dto";
import { Organizacion } from "./organizacion.entity";

@Injectable()
export class OrganizacionServices {

    constructor(
        @InjectRepository(Tribu) private readonly _tribuRepository: Repository<Tribu>,
        @InjectRepository(Organizacion) private readonly _orgRepository: Repository<Organizacion>) { }

    async getOrganizacions(): Promise<Organizacion[]> {

        // return await this._orgRepository.find();
        return await this._orgRepository.find({ relations: ['tribus'] });

    }

    async getOrganizacion(id: number): Promise<Organizacion> {

        const org: Organizacion = await this._orgRepository.findOne({ where: { id }, relations: ['tribus'] });

        if (!org) {
            throw new NotFoundException("Resorce not found");
        }

        return org;
    }


    async createOrganizacion(data: CreateOrganizacionDto) {

        const newPost = await this._orgRepository.save({
            name: data.name,
            status: data.status,
            tribu: data.tribus
        });

        return newPost;


    }

    async updateOrganizacion(id: number, req: UpdateOrgDto): Promise<Organizacion> {

        let toUpdate = await this._orgRepository.findOne({ where: { id } });
        if (!toUpdate) {
            throw new NotFoundException('Objeto no encontrado');
        }

        let updated = Object.assign(toUpdate, req);

        return this._orgRepository.save(updated);

    }

    async removeOrganizacion(id: number): Promise<any> {

        const org: Organizacion = await this._orgRepository.findOne({ where: { id } });

        if (!org) {
            throw new NotFoundException('Objeto no encontrado');
        }

        this._orgRepository.remove(org);

    }


}

