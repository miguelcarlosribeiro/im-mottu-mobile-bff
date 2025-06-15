import { Injectable, Query } from '@nestjs/common';
import { catsClient } from './cats.client';

@Injectable()
export class catsService {
  constructor(private readonly client: catsClient) {}

  async getRandomCat(): Promise<any> {
    return this.client.getCat();
  }
  async getCatBybreed(breed): Promise<any> {
    return this.client.getCatByBreed(breed);
  }
  async getBreeds(): Promise<any> {
    return this.client.getBreeds();
  }
}
