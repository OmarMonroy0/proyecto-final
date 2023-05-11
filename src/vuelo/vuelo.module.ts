import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport'
import { VueloService } from './vuelo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vuelo } from './entity/vuelo.entity';
import { VueloController } from './vuelo.controller';

@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt'}),
    TypeOrmModule.forFeature([Vuelo])
  ],
  controllers:[VueloController],
  providers: [VueloService],
  exports:[VueloService]

})
export class VueloModule {}
