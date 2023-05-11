import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Paquete {
  @PrimaryGeneratedColumn()
  id_paquete: number;

  @Column({ type: String, nullable: true, length: 300 })
  paquete: string;

  @Column({ type: Date, nullable: true })
  fecha_llegada: Date;

  @Column({ type: Date, nullable: true })
  fecha_salida: Date;

  @Column({ type: Number, nullable: true })
  personas: number;
}
