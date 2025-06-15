import { Get, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { Logger } from '@nestjs/common';
import { ApiOperation } from "@nestjs/swagger";
import { Personagem } from "./rickAndMorty.dto";

@Injectable()
export class RickAndMortyClient {
  private readonly logger = new Logger(RickAndMortyClient.name);

  constructor(private readonly http: HttpService){

  }
  @Get()
  @ApiOperation({ summary: 'Retorna um personagem da api do Rick and Morty' })
  async getCharacter(page:number): Promise<any>{
    try{
      const { data } = await firstValueFrom(
        this.http.get(`https://rickandmortyapi.com/api/character/${page}`)
      )
      const dto:  Personagem = {
        name: data.name,
        image: data.image,
        species: data.species,
      };
      return dto;
    }catch (e){
      this.logger.error(`Erro ao buscar personagens: ${e.message}`);
      throw new Error('Erro ao buscar personagens da api Rick and Morty');
    }
  }

}