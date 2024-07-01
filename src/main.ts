import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  
  // console.log(process.env);
  console.log(process.env.DB_USER);
  console.log(process.env.DB_NAME);
  console.log(process.env.DB_PASSWORD);
  

  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
