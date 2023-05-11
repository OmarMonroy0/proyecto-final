import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VueloModule } from './vuelo/vuelo.module';
import { Vuelo } from './vuelo/entity/vuelo.entity';
import { HotelModule } from './hotel/hotel.module';
import { Hotel } from './hotel/entity/hotel.entity';
import { PaqueteModule } from './paquete/paquete.module';
import { Paquete } from './paquete/entity/paquete.entity';
import { PagoModule } from './pago/pago.module';
import { Pago } from './pago/entity/pago.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'Paquete'),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mariadb',
          host: configService.get<string>('DB_HOST'),
          database: configService.get<string>('DB'),
          username: configService.get<string>('DB_USER'),
          password: configService.get<string>('DB_PASSWORD'),
          port: parseInt(configService.get<string>('DB_PORT')),
          synchronize: configService.get<string>('STATE') !== 'produccion',
          entities: [Vuelo, Hotel, Paquete, Pago],
        };
      },
    }),
    VueloModule,
    HotelModule,
    PaqueteModule,
    PagoModule,
  ],
})
export class AppModule {}
