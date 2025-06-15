import { Injectable, Logger } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { breed, Cat } from "./cats.dto";

@Injectable()
export class catsClient {
  private readonly logger = new Logger(catsClient.name);

  constructor(private readonly http: HttpService){}

  ApiLink = 'https://api.thecatapi.com'
  async getCat(): Promise<any>{
    try{
      const { data } = await firstValueFrom(
        this.http.get(`${this.ApiLink}/v1/images/search`)
      )
        const dto:  Cat = {
              id: data[0].id,
              image: data[0].url,
            };

      return dto;
    }catch (e){
      this.logger.error(`Erro ao buscar gato: ${e.message}`);
      throw new Error('Erro ao buscar gato da api Cats');
    }
  }

  async getCatByBreed(breed:string): Promise<any>{
    try{
      const { data } = await firstValueFrom(
        this.http.get(`${this.ApiLink}/v1/images/search?breed_id=${breed}`)
      )
        const dto:  Cat = {
              id: data[0].id,
              image: data[0].url,
            };

      return dto;
    }catch (e){
      this.logger.error(`Erro ao buscar gato pela raca: ${e.message}`);
      throw new Error('Erro ao buscar gato pela raca da api Cats');
    }
  }

  async getBreeds(): Promise<any>{
    try{
      const { data } = await firstValueFrom(
        this.http.get(`${this.ApiLink}/v1/breeds`)
      )
      const breeds: breed[] = data.map((item:any) => ({
        id: item.id,
        nome: item.name,
      }))
      
      return breeds;
    }catch (e){
      this.logger.error(`Erro ao buscar gato pela raca: ${e.message}`);
      throw new Error('Erro ao buscar gato pela raca da api Cats');
    }
  }

}