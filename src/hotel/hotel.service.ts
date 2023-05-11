import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hotel } from './entity/hotel.entity';

@Injectable()
export class HotelService {
  constructor(@InjectRepository(Hotel) private repository: Repository<Hotel>) {}

  create(
    hotel: string,
    fecha_llegada: Date,
    fecha_salida: Date,
    cuartos: number,
    paquete: string,
    tipo_habitacion: string,
  ) {
    return this.repository.save(
      this.repository.create({
        hotel,
        fecha_llegada,
        fecha_salida,
        cuartos,
        paquete,
        tipo_habitacion,
      }),
    );
  }
}
