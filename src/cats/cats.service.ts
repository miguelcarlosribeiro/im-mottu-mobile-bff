import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { catsClient } from './cats.client';

@Injectable()
export class catsService {
  constructor(
    private readonly client: catsClient,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async getRandomCat(): Promise<any> {
    return this.client.getCat();
  }
  async getCatBybreed(breed): Promise<any> {
    const cacheKey = 'catByBreeds';
  
    const cached = await this.cacheManager.get(cacheKey);

    if (cached) {
      return cached;
    }
    
    const CatByBreed = await this.client.getCatByBreed(breed);

    await this.cacheManager.set(cacheKey, CatByBreed, 60);
    return CatByBreed;

  }
  async getBreeds(): Promise<any> {
    const cacheKey = 'catBreeds';
  
    const cached = await this.cacheManager.get(cacheKey);

    if (cached) {
      return cached;
    }
    
    const breeds = await this.client.getBreeds();

    await this.cacheManager.set(cacheKey, breeds, 60);
    return breeds;

  }
}
