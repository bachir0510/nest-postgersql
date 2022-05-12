import { HttpService } from '@nestjs/axios';
import { Controller, Get } from '@nestjs/common';
import { GetUserApi } from 'src/domain/use_cases/user/get.user.api';


@Controller('user')
export class UserConroller {
  constructor(private readonly getUserApi: GetUserApi) {}

  @Get('api')
  async findAll() {
  return await this.getUserApi.call()
  
  }

}