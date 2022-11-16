import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MoviesService {
  private DEFAULT_AXIOS_CONFIG: AxiosRequestConfig = {
    baseURL: process.env.MOVIE_CONSUME_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  constructor(private httpService: HttpService) {}

  async movieConsumer(): Promise<any> {
    const request = this.httpService.post(
      '/#tags/Films',
      this.DEFAULT_AXIOS_CONFIG,
    );

    return firstValueFrom(request)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new HttpException(error?.response?.data, error.response.status);
      });
  }
}
