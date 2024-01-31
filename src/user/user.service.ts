import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        ) {}
    create(createUserDto: CreateUserDto){   
        return this.userRepository.save(createUserDto)
    
    }
    findOneByEmail(email:string){
        return this.userRepository.findOneBy({email})
    }
    logIn(){
       
        return '' //this.usersRepository.insert(newUser)
    }
    resetPassword(){
        return 'Tu contraseña es:'
    }
    search(localizacion:string){
        return `Tu busqueda es:${localizacion}`
    }
    updateUser(userId: string,newData: any){
        return this.userRepository.update({nombre:userId},newData) 
    }
    setDriver(){
        return this.userRepository.find()
    }
    hireService(){
        return 'Servicio contratado'
    }
    payService(){
        return 'Servicio pagado'
    }
    cancelService(){
        return 'Servicio cancelado'
    }
    detailService(){
        return 'Detalles del servicio'
    }
    rateService(){
        return 'Servicio valorado'
    }
    commentService(){
        return 'Servicio comentado'
    }
    sendMessage(){
        return 'Mensaje enviado'
    }
    viewMessage(){
        return 'Mensaje mostrado'
    }

}

