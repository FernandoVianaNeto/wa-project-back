import { Injectable } from '@nestjs/common';
import { ConsumerService } from '../consumer/consumer.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movies.entity';
import { MovieRepository } from './repositories/movie.repository';

@Injectable()
export class MoviesService {
  constructor(
    private movieRepository: MovieRepository,
    private readonly consumerService: ConsumerService,
  ) {}

  async consumeAndRegisterMovie() {
    const moviesInfo = await this.consumerService.movieConsumer();

    await Promise.all(
      moviesInfo.map(async (movieInfo) => {
        await this.createMovie({
          title: movieInfo.title,
          banner: movieInfo.movie_banner,
          director: movieInfo.director,
          producer: movieInfo.producer,
          description: movieInfo.description,
        });
      }),
    );

    return;
  }

  async createMovie(createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.movieRepository.create(createMovieDto);
  }

  async listMovies(): Promise<Movie[]> {
    const movies = await this.movieRepository.find({});

    return movies;
  }
}
