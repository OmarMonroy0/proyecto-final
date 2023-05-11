import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vuelo } from './entity/vuelo.entity';

@Injectable()
export class VueloService {
  constructor(@InjectRepository(Vuelo) private repository: Repository<Vuelo>) {}

  create(
    salida: string,
    llegada: string,
    f_salida: Date,
    f_llegada: Date,
    personas: number,
    tipo_asiento: string,
    tipo_viaje: string,
  ) {
    return this.repository.save(
      this.repository.create({
        salida,
        llegada,
        f_salida,
        f_llegada,
        personas,
        tipo_asiento,
        tipo_viaje,
      }),
    );
  }
}
