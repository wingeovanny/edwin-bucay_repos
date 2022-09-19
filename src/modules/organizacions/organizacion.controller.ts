import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateOrganizacionDto } from "./dto/create-organizacion.dto";
import { UpdateOrgDto } from "./dto/update-org.dto";
import { Organizacion } from "./organizacion.entity";
import { OrganizacionServices } from "./organizacion.service";

@Controller('org')
export class OrganizacionController {

    constructor(private readonly orgService: OrganizacionServices) {

    }

    @Get()
    getOrganizacion(): Promise<Organizacion[]> {
        return this.orgService.getOrganizacions();
    }

    @Get(':id')
    getOrganizacions(@Param('id') id: number): Promise<Organizacion> {

        return this.orgService.getOrganizacion(id);

    }


    @Post()
    createOrganizacion(@Body() data: CreateOrganizacionDto): Promise<Organizacion> {
        console.log(data instanceof CreateOrganizacionDto);

        return this.orgService.createOrganizacion(data);
    }



    @Patch(':id')
    updateOrganizacion(@Param('id') id: number, @Body() org: UpdateOrgDto): Promise<Organizacion> {

        let actOrg: any = org;

        return this.orgService.updateOrganizacion(id, actOrg);

    }

    @Delete(':id')
    removeOrganizacion(@Param('id') id: number): Promise<void> {
        return this.orgService.removeOrganizacion(id);
    }
}