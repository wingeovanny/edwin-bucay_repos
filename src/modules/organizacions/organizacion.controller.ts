import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { OrganizacionDto } from "./dto/organizacion.dto";
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
    createOrganizacion(@Body() body): Promise<Organizacion> {

        let newOrg: any = body;
        return this.orgService.createOrganizacion(newOrg);
    }


    @Patch(':id')
    updateOrganizacion(
        @Param('id') id: number,
        @Body() tuit: OrganizacionDto
    ): Promise<Organizacion> {
        return this.orgService.updateOrganizacion(id, tuit);

    }

    @Delete(':id')
    removeOrganizacion(@Param('id') id: number): Promise<void> {
        return this.orgService.removeOrganizacion(id);
    }
}