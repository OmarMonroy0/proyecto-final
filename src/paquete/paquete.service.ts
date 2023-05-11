import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paquete } from './entity/paquete.entity';

@Injectable()
export class PaqueteService {
  constructor(
    @InjectRepository(Paquete) private repository: Repository<Paquete>,
  ) {}

  create(
    paquete: string,
    fecha_llegada: Date,
    fecha_salida: Date,
    personas: number,
  ) {
    return this.repository.save(
      this.repository.create({
        paquete,
        fecha_llegada,
        fecha_salida,
        personas,
      }),
    );
  }
}
