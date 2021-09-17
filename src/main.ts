import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FullExceptionFilters } from './filters/fullexecptions';
import { ExeptionsInterceptor } from './interceptors/exeptions.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ExeptionsInterceptor());
  app.useGlobalFilters(new FullExceptionFilters());
  await app.listen(3000);
}
bootstrap();
