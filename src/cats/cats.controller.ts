import { Controller, Get, Query } from '@nestjs/common';
import { catsService } from './cats.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('cats')
export class CatsController {
  constructor(private readonly service: catsService) {}

  @Get('random')
  async getCat() {
    return this.service.getRandomCat();
  }
  
  @Get('bybreed')
  @ApiQuery({ name: 'breed', required: true, description: 'Busca um gato pela raca' })
  async getCatByBreed(@Query('breed') breed: string) {
    return this.service.getCatBybreed(breed);
  }

  @Get('breeds')
  async Breeds() {
    return this.service.getBreeds();
  }
}
