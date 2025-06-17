import { Module } from '@nestjs/common';
import {CacheModule} from '@nestjs/cache-manager'
import { RickAndMortyModule } from './rickAndMorty/rickAndMorty.module';
import { CatsModule } from './cats/cats.module';
import { HttpModule } from '@nestjs/axios';
import { PairsModule } from './pairs/pairs.module';

@Module({
  imports: [HttpModule,
            RickAndMortyModule,
            CatsModule,
            PairsModule,
            CacheModule.register({
              ttl: 60_000,
              max: 100,
              isGlobal: true,
            }),
          ]
          ,
})
export class AppModule {}
