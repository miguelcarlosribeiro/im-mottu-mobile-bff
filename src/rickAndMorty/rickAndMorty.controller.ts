import { Controller, Get, Query } from '@nestjs/common';
import { RickAndMortyService } from './rickAndMorty.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('rickandmorty')
export class RickAndMortyController {
  constructor(private readonly service: RickAndMortyService) {}

  @Get('characters')
  async getCharacter() {
    const characters = await this.service.getCharacter();
    return characters;
  }
  @Get('searchCharacter')
  @ApiQuery({ name: 'name', required: true, description: 'Nome do personagem para busca' })
  async searchCharacter(name) {
    const characters = await this.service.searchCharacter(name);
    return characters;
  }
}
