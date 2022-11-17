import { Injectable } from '@nestjs/common';
import { PaginationParamsDto } from '../common/pagination/dto';
import { PaginatedResponse } from '../common/pagination/interfaces';
import { PaginationQuery } from '../common/pagination/models';
import { paginate } from '../common/pagination/utils';
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

  async listMovies(
    paginationParamsDto: PaginationParamsDto,
  ): Promise<PaginatedResponse<Movie>> {
    const { page, itemsPerPage } = paginationParamsDto;
    const pagination = new PaginationQuery(page, itemsPerPage);

    const { skip, take, originals } = pagination.getValues();

    const movies = await this.movieRepository.find(
      {},
      '',
      { path: '', strictPopulate: false },
      { createdAt: -1 },
      take,
      skip,
    );
    const count = await this.movieRepository.countDocuments({});

    return paginate<Movie>([movies, count], {
      skip,
      take,
      originals,
    });
  }
}
