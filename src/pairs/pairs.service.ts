import { Injectable, Logger } from "@nestjs/common";
import { catsService } from "../cats/cats.service";
import { RickAndMortyService } from "../rickAndMorty/rickAndMorty.service";
import { FavoritesPairs, Pair } from "./pairs.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class PairsService{
  constructor(
    private readonly rickAndMortyService: RickAndMortyService,
    private readonly catsService: catsService,
  ){}

  private readonly logger = new Logger(PairsService.name);
  private favorites: FavoritesPairs[] = [];
  
  async getrandomPairs(){
    try{
    const [
      character,
       cat
      ] = await Promise.all([
        this.rickAndMortyService.getCharacter(),
        this.catsService.getRandomCat()
        ])


    return {
      character: {
        name: character.name,
        image: character.image,
        species: character.species,
      },
      cat: {
        id: cat.id,
        image: cat.image,
      },
    };
    }catch (e){
      this.logger.error(`Erro ao buscar par : ${e.message}`);
      throw new Error('Erro ao buscar par');
    }
  }
  async getByBreed(characterName?: string,catBreed?: string): Promise<any>{
    try{
      const  [
        character,
        cat
      ] = await Promise.all([
        characterName
        ? this.rickAndMortyService.searchCharacter(characterName)
        : this.rickAndMortyService.getCharacter(),
        catBreed
        ? this.catsService.getCatBybreed(catBreed)
        : this.catsService.getRandomCat(),
      ])

      
        return {
          character: {
            name: character.name,
            image: character.image,
            species: character.species,
          },
          cat: {
            id: cat.id,
            image: cat.image,
          },
        };
      }catch (e){
      this.logger.error(`Erro ao buscar par por nome ou raca: ${e.message}`);
      throw new Error('Erro ao buscar par por nome ou raca');
    }
  }
  
  async saveFavorites(favorite: FavoritesPairs){
    this.favorites.push(favorite)
    return favorite;
  }
  
  getFavorites(){
    return this.favorites;

  }
}

