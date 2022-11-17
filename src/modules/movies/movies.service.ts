import { Injectable } from '@nestjs/common';
import { ConsumerService } from '../common/consumer/consumer.service';
// import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieRepository } from './repositories/movie.repository';

@Injectable()
export class MoviesService {
  constructor(
    private movieRepository: MovieRepository,
    private readonly consumerService: ConsumerService,
  ) {}

  async consumeAndRegisterMovie() {
    const movieInfo = await this.consumerService.movieConsumer();

    return movieInfo;
  }

  // async createMovie(createMovieDto: CreateMovieDto) {
  //   return '';
  // }
}
