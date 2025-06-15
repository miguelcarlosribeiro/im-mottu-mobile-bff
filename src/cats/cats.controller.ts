import { Controller, Get } from '@nestjs/common';
import { catsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly service: catsService) {}

  @Get('random')
  async getCat() {
    return this.service.getRandomCat();
  }
}
