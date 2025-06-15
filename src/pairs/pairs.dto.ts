import { ApiProperty } from "@nestjs/swagger";
import { Personagem } from "../rickAndMorty/rickAndMorty.dto";
import { Cat } from "../cats/cats.dto";

export class Pair{
  @ApiProperty({type: () => Personagem })
  personagem: Personagem;

  @ApiProperty({type: () => Cat})
  cat: Cat;

}
