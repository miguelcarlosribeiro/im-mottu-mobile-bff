import { Module } from '@nestjs/common';
import { RickAndMortyModule } from './rickAndMorty/rickAndMorty.module';
import { CatsModule } from './cats/cats.module';
import { HttpModule } from '@nestjs/axios';
import { PairsModule } from './pairs/pairs.module';

@Module({
  imports: [HttpModule,
            RickAndMortyModule,
            CatsModule,
            PairsModule
          ],
})
export class AppModule {}
