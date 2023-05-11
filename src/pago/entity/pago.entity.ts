import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Pago{
    @PrimaryGeneratedColumn()
    id_pago:number;

    @Column({type:String,nullable:false,length:300})
    correo:string;

    @Column({type:String,nullable:false, length:300})
    tarjeta:string;

    @Column({type:String,nullable:false, length:300})
    cvv:string;

    @Column({type:String,nullable:false,length:400})
    fecha:string;
}
