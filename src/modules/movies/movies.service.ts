import { Injectable } from '@nestjs/common';
import { MovieRepository } from './repositories/movie.repository';

@Injectable()
export class MoviesService {
  constructor(private movieRepository: MovieRepository) {}

  async returnOnly() {
    return '';
  }
}
