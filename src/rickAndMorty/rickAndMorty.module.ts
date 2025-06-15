import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RickAndMortyController } from './rickAndMorty.controller';
import { RickAndMortyService } from './rickAndMorty.service';
import { RickAndMortyClient } from './rickAndMorty.client';

@Module({
  imports: [HttpModule],
  controllers: [RickAndMortyController],
  providers: [RickAndMortyService, RickAndMortyClient],
  exports: [RickAndMortyService],
})
export class RickAndMortyModule {}
