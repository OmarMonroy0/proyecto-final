import { Body, Controller, Post } from '@nestjs/common';
import { PaqueteService } from './paquete.service';

@Controller('paquete')
export class PaqueteController {
  constructor(private paqueteService: PaqueteService) {}

  @Post()
  create(@Body() data: any) {
    const paquete = data.paquete;
    const fecha_llegada = data.fecha_llegada;
    const fecha_salida = data.fecha_salida;
    const personas = data.personas;
    return this.paqueteService.create(
      paquete,
      fecha_llegada,
      fecha_salida,
      personas,
    );
  }
}
