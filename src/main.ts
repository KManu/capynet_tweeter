import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  let config: ConfigService = new ConfigService();
  const app = await NestFactory.create(AppModule);
  await app.listen(config.get<string>('PORT'));
}
bootstrap();
