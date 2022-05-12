import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpConfigService } from 'src/domain/config/http.config';
import { ServiceModule } from 'src/infrastructure/service/service.module';
import { GetUserApi } from './get.user.api';

@Module({
  imports: [
    ServiceModule,
  ],
  providers: [GetUserApi],
  exports: [GetUserApi],
})
export class UserModule {}
