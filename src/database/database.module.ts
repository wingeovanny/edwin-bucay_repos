import { Module } from '@nestjs/common';
import { DataBaseProvider } from './database.providers';


@Module({
    imports: [DataBaseProvider],
    exports: [DataBaseProvider]
})
export class DatabaseModule { }
