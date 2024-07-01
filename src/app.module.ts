import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { Module ,} from '@nestjs/common';
import { EmpleadosService } from './empleados/empleados.service';
import { EmpleadosModule } from './empleados/empleados.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), 
    TypeOrmModule.forRoot({
      // ssl:process.env.STAGE === 'prod',
      // extra:process.env.STAGE === 'prod'
      //   ? {rejectUnauthorized: false,}
      //   :null,
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
    }), 
    EmpleadosModule,
  ],
  controllers: [AppController],
  providers: [AppService, EmpleadosService],
})
export class AppModule {}
