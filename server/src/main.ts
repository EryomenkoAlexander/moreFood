import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.use(passport.initialize())
  app.setGlobalPrefix('api')
  await app.listen(5000);
}
bootstrap();
