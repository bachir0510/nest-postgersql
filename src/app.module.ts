import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ControllerV1Module } from './app/controllers/v1/controller.v1.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    ControllerV1Module,
  DatabaseModule
  ],
  
})
export class AppModule {
  static port: number;

  constructor(private readonly configServer: ConfigService){
    AppModule.port = this.configServer.get('PORT');
  }
}
