import { Injectable, Logger } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { Cat } from "./cats.dto";

@Injectable()
export class catsClient {
  private readonly logger = new Logger(catsClient.name);

  constructor(private readonly http: HttpService){}

  async getCat(): Promise<any>{
    try{
      const { data } = await firstValueFrom(
        this.http.get(`/v1/images/search`)
      )
        const dto:  Cat = {
              id: data[0].id,
              image: data[0].url,
            };

      return dto;
    }catch (e){
      this.logger.error(`Erro ao buscar gato: ${e.message}`);
      throw new Error('Erro ao buscar personagens da api Cats');
    }
  }

}