import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Vuelo{
    @PrimaryGeneratedColumn()
    id_vuelo:number;

    @Column({type:String,nullable:true,length:300})
    salida:string;

    @Column({type:String,nullable:true, length:300})
    llegada:string;

    @Column({type:Date,nullable:true})
    f_salida:Date;

    @Column({type:Date,nullable:true})
    f_llegada:Date;
    
    @Column({type:Number,nullable:true})
    personas: number;

    @Column({type:String,nullable:true})
    tipo_asiento : string;

    @Column({type:String,nullable:true})
    tipo_viaje : string;

}
