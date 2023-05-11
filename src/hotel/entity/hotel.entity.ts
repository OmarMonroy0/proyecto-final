import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Hotel{
    @PrimaryGeneratedColumn()
    id_hotel:number;

    @Column({type:String,nullable:true,length:300})
    hotel:string;

    @Column({type:Date,nullable:true})
    fecha_llegada:Date;

    @Column({type:Date,nullable:true})
    fecha_salida:Date;

    @Column({type:Number,nullable:true})
    cuartos:number;
    
    @Column({type:String,nullable:true})
    paquete:string;

    @Column({type:String,nullable:true})
    tipo_habitacion:string;


}
