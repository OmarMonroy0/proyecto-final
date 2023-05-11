import { Body, Controller, Post } from '@nestjs/common';
import { PagoService } from './pago.service';

@Controller('pago')
export class PagoController {
  constructor(private vueloService: PagoService) {}

  @Post()
  create(@Body() body: any) {
    const correo = body.correo;
    const tarjeta = body.tarjeta;
    const cvv = body.cvv;
    const fecha = body.fecha;

    return this.vueloService.create(correo, tarjeta, cvv, fecha);
  }
}
