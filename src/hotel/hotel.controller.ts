import { Body, Controller, Post } from '@nestjs/common';
import { HotelService } from './hotel.service';

@Controller('hotel')
export class HotelController {
  constructor(private hotelService: HotelService) {}

  @Post()
  create(@Body() body: any) {
    const hotel = body.hotel;
    const llegada = body.llegada;
    const regreso = body.regreso;
    const cuartos = body.cuartos;
    const tipo_paquete = body.tipo_paquete;
    const tipo_habitacion = body.tipo_habitacion;

    return this.hotelService.create(
      hotel,
      llegada,
      regreso,
      cuartos,
      tipo_paquete,
      tipo_habitacion,
    );
  }
}
