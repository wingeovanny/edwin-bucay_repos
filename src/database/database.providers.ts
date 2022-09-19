import { DynamicModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from '@nestjs/config';
import { Enviroment } from "src/common/enum/environmet.enum";
import { ConnectionOptions } from "tls";
import { join } from "path";
import { writeFileSync } from "fs";

export const DataBaseProvider: DynamicModule = TypeOrmModule.forRootAsync({

    inject: [ConfigService],
    async useFactory(config: ConfigService) {

        const isDevEnviroment = config.get("NODE_ENV") !== Enviroment.Production;

        const dbConfig = {
            type: 'postgres',
            host: config.get("HOST"),
            username: config.get("USER"),
            password: config.get("PASSWORD"),
            port: config.get("DBPORT"),
            database: config.get("NAME"),
            autoLoadEntities: true,
            synchronize: true,
            logging: config.get("LOGGING"),
            migrations: ['dist/database/migrations/*.js'],
            entities: ['dist/**/*.entity.js'],
            cli: {
                migrationsDir: 'src/database/migrations',
            },

        } as ConnectionOptions;


        if (isDevEnviroment) {
            createOrmConfigFile(dbConfig);
        }

        return dbConfig;
    }

})

async function createOrmConfigFile(dbConfig: ConnectionOptions) {
    const path = join(__dirname, '../../');
    writeFileSync(path + 'ormconfig.json', JSON.stringify(dbConfig, null, 2));
}