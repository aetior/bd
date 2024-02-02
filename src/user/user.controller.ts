import { Controller, Get,Delete,Post,Put, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor( private readonly userService:UserService){}
    @Post()
    logIn(){
        return this.userService.logIn()
    }
    // @Post()
    // signIn (@Body() newUser: any){
    //     return this.userService.SignIn(newUser)
    // }
    @Put('reset')
    resetPassword(){
        return this.userService.resetPassword()
    }
    @Get(':localizacion')
    search(@Param('localizacion') localizacion: string){
        return this.userService.search(localizacion)
    }
    // @Put(':userID')
    // updateUser(@Param('userID') userID: string,@Body()newData:any){
    //     return this.userService.updateUser(userID,newData)
    // }
    @Get()
    setDriver(){
        return this.userService.setDriver()
    }
    @Post()
    hireService(){
        return this.userService.hireService()
    }
    @Post()
    payService(){
        return this.userService.payService()
    }
    @Delete()
    cancelService(){
        return this.userService.cancelService()
    }
    @Get()
    detailService(){
        return this.userService.detailService()
    }
    @Post()
    rateService(){
        return this.userService.rateService()
    }
    @Post()
    commentService(){
        return this.userService.commentService()
    }
    @Post()
    sendMessage(){
        return this.userService.sendMessage()
    }
    @Get()
    viewMessage(){
        return this.userService.viewMessage()
    }

}
