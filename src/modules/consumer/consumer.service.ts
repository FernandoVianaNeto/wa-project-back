import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class ConsumerService {
  private DEFAULT_AXIOS_CONFIG: AxiosRequestConfig = {
    baseURL: process.env.MOVIE_CONSUME_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  constructor(private httpService: HttpService) {}

  async movieConsumer(): Promise<any> {
    const request = await this.httpService
      .get('/films', this.DEFAULT_AXIOS_CONFIG)
      .pipe(map((response) => response.data));

    return firstValueFrom(request);
  }
}
