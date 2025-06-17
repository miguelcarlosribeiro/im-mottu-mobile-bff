import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { PairsService } from "./pairs.service";
import { ApiBody, ApiOkResponse, ApiQuery, ApiTags } from "@nestjs/swagger";
import { FavoritesPairs, Pair } from "./pairs.dto";

@ApiTags('Pairs')
@Controller('v1/pairs')
export class PairsController {
  constructor(private readonly pairsService: PairsService){}
  
    @Get()
    @ApiOkResponse({ type: Pair })
    async getRandomPair(){
      return this.pairsService.getrandomPairs();
    }
    
    @Get('search')
    @ApiOkResponse({ type: Pair })
    @ApiQuery({ name: 'characterName', required: false, description: 'Busca um personagem pelo nome' })
    @ApiQuery({ name: 'catBreed', required: false, description: 'Busca um gato pela raca' })
    async getDoubleTeam(
      @Query('characterName') characterName: string,
      @Query('catBreed') catBreed: string
    ){
      return this.pairsService.getByBreed(characterName,catBreed);
    }

    @Post('favorite')
    @ApiBody({type: FavoritesPairs})
    async saveFavorites(@Body() body: FavoritesPairs){
      return this.pairsService.saveFavorites(body);
    }

    @Get('favorites')
    async getFavorites(){
      return this.pairsService.getFavorites();
    }

}