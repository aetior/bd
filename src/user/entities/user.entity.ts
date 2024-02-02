import { Entity,Column,PrimaryGeneratedColumn, DeleteDateColumn,IsNull } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number// int NOT NULL AUTO_INCREMENT,
    @Column()
    nombre: string// varchar(45) NOT NULL,
    @Column()
    apellido: string// varchar(45) NOT NULL,
    @Column({unique: true})
    email: string// varchar(45) NOT NULL,
    @Column()
    metodopago: string// varchar(45) NOT NULL,
    @Column()
    dni: string// varchar(45) NOT NULL,
    @Column()
    direccion: string// varchar(45) NOT NULL,
    @Column()
    pass: string //varchar(45) NOT NULL,
    @Column({default:"user"})
    rol:string
    @DeleteDateColumn()
    deletedAt: Date;
}
