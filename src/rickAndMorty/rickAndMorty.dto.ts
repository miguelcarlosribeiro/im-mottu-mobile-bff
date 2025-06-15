import { ApiProperty } from "@nestjs/swagger";

export class Personagem{
  @ApiProperty({description: 'nome do personagem'})
  name: string;

  @ApiProperty({description: 'Link de uma imagem de um personagem'})
  image: string;

  @ApiProperty({description: 'Especie dopersonagem'})
  species: string;

}
