import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { catsClient } from './cats.client';
import { catsService } from './cats.service';
import { CatsController } from './cats.controller';

@Module({
  imports: [HttpModule],
  providers: [catsClient, catsService],
  controllers: [CatsController],
  exports: [catsService],
})
export class CatsModule {}
