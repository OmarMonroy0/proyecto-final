import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PagoService } from './pago.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pago } from './entity/pago.entity';
import { PagoController } from './pago.controller';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([Pago]),
  ],
  controllers:[PagoController],
  providers: [PagoService],
  exports:[PagoService]

})
export class PagoModule {}
