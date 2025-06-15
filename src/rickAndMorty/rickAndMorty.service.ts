import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { RickAndMortyClient } from './rickAndMorty.client';

@Injectable()
export class RickAndMortyService {
  constructor(
    private readonly client: RickAndMortyClient,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async getCharacter(): Promise<any> {
    const maxId = 826;
    const randomId = this.getRandomInt(1, maxId);
    return this.client.getCharacter(randomId);
  }
  async searchCharacter(name): Promise<any> {
    const cacheKey = 'characterByName';
    
    const cached = await this.cacheManager.get(cacheKey);
    
    if (cached) {
      return cached;
    }

    const character = this.client.searchCharacter(name);

    await this.cacheManager.set(cacheKey, character, 60);
    return character;
  }
}
