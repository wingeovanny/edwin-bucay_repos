import { ValidationPipe } from '@nestjs/common';
import { APP_FILTER, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //para hacer un mapper auto o castear, y evitar data maliciiosa, 
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true
  }))

  await app.listen(AppModule.port);

}
bootstrap();
