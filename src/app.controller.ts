import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('status')
@Controller()

export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  @ApiOperation({ summary: 'Retorna o status da aplicação' })
  getHello(): string {
    return this.appService.getHello();
  }
}
