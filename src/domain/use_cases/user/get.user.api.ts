import { Injectable } from '@nestjs/common';
import { UserService } from 'src/infrastructure/service/use.service';

@Injectable()
export class GetUserApi {
  constructor(private readonly userService: UserService) {}

  async call(): Promise<any> {
    return await this.userService.getUser();
  }
}
