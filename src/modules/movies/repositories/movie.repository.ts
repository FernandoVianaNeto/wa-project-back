import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from '../../../database/entity.repository';
import { Movie, MovieDocument } from '../entities/movies.entity';

@Injectable()
export class MovieRepository extends EntityRepository<MovieDocument> {
  constructor(
    @InjectModel(Movie.name)
    private movieModel: Model<MovieDocument>,
  ) {
    super(movieModel);
  }
}
