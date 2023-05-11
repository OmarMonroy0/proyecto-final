import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaqueteService } from './paquete.service';
import { PaqueteController } from './paquete.controller';
import { Paquete } from './entity/paquete.entity';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([Paquete]),
  ],
  controllers: [PaqueteController],
  providers: [PaqueteService],
  exports: [PaqueteService],
})
export class PaqueteModule {}
