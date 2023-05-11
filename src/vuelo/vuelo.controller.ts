import { Body, Controller, Post } from '@nestjs/common';
import { VueloService } from './vuelo.service';

@Controller('vuelo')
export class VueloController {
  constructor(private vueloService: VueloService) {}

  @Post()
  create(@Body() body: any) {
    const origen = body.origen;
    const destino = body.destino;
    const fecha_salida = body.fecha_salida;
    const fecha_llegada = body.fecha_llegada;
    const personas = body.personas;
    const tipo_asiento = body.tipo_asiento;
    const vuelo = body.vuelo;

    return this.vueloService.create(
      origen,
      destino,
      fecha_salida,
      fecha_llegada,
      personas,
      tipo_asiento,
      vuelo,
    );
  }
}
