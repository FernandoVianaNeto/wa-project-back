import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumerService } from '../common/consumer/consumer.service';
import { MoviesController } from './controllers/movies.controller';
import { Movie, MovieSchema } from './entities/movies.entity';
import { MoviesService } from './movies.service';
import { MovieRepository } from './repositories/movie.repository';

@Module({
  imports: [
    HttpModule.register({}),
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
  controllers: [MoviesController],
  providers: [MoviesService, MovieRepository, ConsumerService],
  exports: [MoviesService],
})
export class MoviesModule {}
