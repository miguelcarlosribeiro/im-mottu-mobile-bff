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
  apiLink = 'https://rickandmortyapi.com/api/character/'
  @Get()
  @ApiOperation({ summary: 'Retorna um personagem aleatorio da api do Rick and Morty' })
  async getCharacter(page:number): Promise<any>{
    try{
      const { data } = await firstValueFrom(
        this.http.get(`${this.apiLink}${page}`)
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

  @Get()
  @ApiOperation({ summary: 'Procura um personagem da api do Rick and Morty' })
  async searchCharacter(name:string): Promise<any>{
    try{
      const { data } = await firstValueFrom(
        this.http.get(`${this.apiLink}?name=${name}`)
      )
      const dto:  Personagem = {
        name: data.results[0].name,
        image: data.results[0].image,
        species: data.results[0].species,
      };
      return dto;
    }catch (e){
      this.logger.error(`Erro ao buscar personagens: ${e.message}`);
      throw new Error('Erro ao buscar personagens da api Rick and Morty');
    }
  }

}