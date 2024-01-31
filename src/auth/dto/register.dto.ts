import { IsEmail, IsString, MinLength } from "class-validator";


export class RegisterDto{
    @IsString()
    @MinLength(1)
    name : string;
    @IsString()
    @IsEmail()
    email:string;
    @IsString()
    @MinLength(6)
    pass:string
}