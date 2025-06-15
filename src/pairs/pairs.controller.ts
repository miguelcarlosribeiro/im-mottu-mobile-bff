import { Controller, Get } from "@nestjs/common";
import { PairsService } from "./pairs.service";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Pair } from "./pairs.dto";

@ApiTags('Pairs')
@Controller('v1/pairs')
export class PairsController {
  constructor(private readonly pairsService: PairsService){}
  
    @Get()
    @ApiOkResponse({ type: Pair })
    async getRandomPair(){
      return this.pairsService.getrandomPairs();
    }
  
}