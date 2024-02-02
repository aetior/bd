import { BadGatewayException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import * as bcriptjs from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService){}
    
    // async register(registerDto:RegisterDto){
    //     return await this.userService.create(registerDto)
    // }

    async register2(registerDto:RegisterDto){
      const email= registerDto.email
      const  user = await this.userService.findOneByEmail(email)
      console.log(user)
      console.log(email)
      registerDto.pass = await bcriptjs.hash(registerDto.pass, 10);
        if(user){
            throw new BadGatewayException("El usuario existe")
        }else{
        return await this.userService.create(registerDto)}
    }
}
