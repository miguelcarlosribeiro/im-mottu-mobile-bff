import { ApiProperty } from "@nestjs/swagger";

export class Cat{
  @ApiProperty({description: 'Id de gato'})
  id: string;

  @ApiProperty({description: 'Link de uma imagem de um gato'})
  image: string;
}

export class breed{
  @ApiProperty({description: 'Id da raca'})
  id: string;

  @ApiProperty({description: 'nome da raca'})
  name: string;
}