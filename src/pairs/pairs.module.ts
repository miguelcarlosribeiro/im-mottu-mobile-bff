import { Module } from '@nestjs/common';
import { PairsController } from './pairs.controller';
import { PairsService } from './pairs.service';
import { RickAndMortyModule } from '../rickAndMorty/rickAndMorty.module';
import { CatsModule } from '../cats/cats.module';

@Module({
  imports: [RickAndMortyModule, CatsModule],
  controllers: [PairsController],
  providers: [PairsService],
})
export class PairsModule {}
