import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

import { OrganizacionsModule } from './modules/organizacions/organizacions.module';
import { TribusModule } from './modules/tribus/tribus.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    OrganizacionsModule,
    TribusModule,
  ],
})
export class AppModule {

  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT');
  }
}
