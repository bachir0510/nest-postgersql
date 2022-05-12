import { Injectable } from '@nestjs/common';
import { IUser } from '../interface/user.interface';

@Injectable()
export class UserAdapter {
  static maperUserResponse(data): IUser {
    return {
      id: data.id,
      userName: data.username,
      firstName: data.first_name,
      email: data.email,
    };
  }
}
