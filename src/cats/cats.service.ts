import { Injectable } from '@nestjs/common';
import { catsClient } from './cats.client';

@Injectable()
export class catsService {
  constructor(private readonly client: catsClient) {}

  async getRandomCat(): Promise<any> {
    return this.client.getCat();
  }
}
