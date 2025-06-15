import { Injectable } from "@nestjs/common";
import { RickAndMortyClient } from "../rickAndMorty/rickAndMorty.client";
import { catsService } from "../cats/cats.service";
import { RickAndMortyService } from "../rickAndMorty/rickAndMorty.service";
import { Pair } from "./pairs.dto";

@Injectable()
export class PairsService{
  constructor(
    private readonly rickAndMortyService: RickAndMortyService,
    private readonly catsService: catsService
  ){}

  async getrandomPairs(){
    
    const character = await this.rickAndMortyService.getCharacter();

    const cat = await this.catsService.getRandomCat();

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
  }
}

