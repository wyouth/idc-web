import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import {HttpExceptionFilter} from "./core/filter/http-exception/http-exception.filter";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  // app.useGlobalInterceptors(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
