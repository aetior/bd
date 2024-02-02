import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { log } from 'console';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService:AuthService
    ){}

    // @Post('register')
    // register(@Body() registerDto:RegisterDto){
    //     console.log(registerDto);   
    //     return this.authService.register(registerDto)
    // }
    @Post('register2')
    register2(@Body()  registerDto:RegisterDto){  
        return this.authService.register2(registerDto)
    }
}
