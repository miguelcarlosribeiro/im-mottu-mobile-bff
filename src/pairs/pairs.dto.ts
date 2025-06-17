import { ApiProperty } from "@nestjs/swagger";
import { Personagem } from "../rickAndMorty/rickAndMorty.dto";
import { Cat } from "../cats/cats.dto";

export class Pair{
  @ApiProperty({type: () => Personagem })
  personagem: Personagem;

  @ApiProperty({type: () => Cat})
  cat: Cat;

}

export class FavoritesPairs {
  @ApiProperty({description: 'Nome do personagem'})
  characterName: string;

  @ApiProperty({description: 'Imagem do personagem'})
  characterImage: string;

  @ApiProperty({description: 'Especie do personagem'})
  characterSpecies: string;

  @ApiProperty({description: 'ID do gato'})
  catId: string;

  @ApiProperty({description: 'Imagem do gato'})
  catImage: string;
}

