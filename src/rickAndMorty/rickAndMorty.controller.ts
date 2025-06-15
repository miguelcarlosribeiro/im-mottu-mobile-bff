import { Controller, Get, Query } from '@nestjs/common';
import { RickAndMortyService } from './rickAndMorty.service';

@Controller('rickandmorty')
export class RickAndMortyController {
  constructor(private readonly service: RickAndMortyService) {}

  @Get('characters')
  async getCharacters(@Query('page') page?: number) {

    const characters = await this.service.getCharacter();
    return characters;
  }
}
