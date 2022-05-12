import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUserApi } from 'src/domain/use_cases/user/get.user.api';

@ApiTags('users')
@Controller('user')
export class UserConroller {
  constructor(private readonly getUserApi: GetUserApi) {}

  @Get('api')
  async findAll() {
  return await this.getUserApi.call()
  
  }

}