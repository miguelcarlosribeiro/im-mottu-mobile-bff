import { Injectable } from '@nestjs/common';
import { RickAndMortyClient } from './rickAndMorty.client';

@Injectable()
export class RickAndMortyService {
  constructor(private readonly client: RickAndMortyClient) {}

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async getCharacter(): Promise<any> {
    const maxId = 826;
    const randomId = this.getRandomInt(1, maxId);
    return this.client.getCharacter(randomId);
  }
  async searchCharacter(name): Promise<any> {
    return this.client.searchCharacter(name);
  }
}
