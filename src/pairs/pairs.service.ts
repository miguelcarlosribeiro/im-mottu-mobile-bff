import { Injectable } from "@nestjs/common";
import { catsService } from "../cats/cats.service";
import { RickAndMortyService } from "../rickAndMorty/rickAndMorty.service";


@Injectable()
export class PairsService{
  constructor(
    private readonly rickAndMortyService: RickAndMortyService,
    private readonly catsService: catsService
  ){}

  async getrandomPairs(){
    
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
  }
  async getByBreed(){
    
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

