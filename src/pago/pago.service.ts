import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pago } from './entity/pago.entity';

@Injectable()
export class PagoService {
  constructor(@InjectRepository(Pago) private repository: Repository<Pago>) {}

  create(correo: string, tarjeta: string, cvv: string, fecha: string) {
    return this.repository.save(
      this.repository.create({
        correo,
        tarjeta,
        cvv,
        fecha,
      }),
    );
  }
}
