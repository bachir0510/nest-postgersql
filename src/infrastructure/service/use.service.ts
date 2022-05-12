import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
const axios = require('axios').default;
import { map } from 'rxjs';
import { UserAdapter } from './adapter/user.adapter';
import { IUser } from './interface/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly http: HttpService) {}

  async getUser(): Promise<IUser> {
    const response =  await axios.get('https://random-data-api.com/api/users/random_user')
   
     console.log(response);
      
      return UserAdapter.maperUserResponse(response)
  }

 
}
