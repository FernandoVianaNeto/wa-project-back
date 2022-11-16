import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesController } from './controllers/movies.controller';
import { Movie, MovieSchema } from './entities/movies.entity';
import { MoviesService } from './movies.service';
import { MovieRepository } from './repositories/movie.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
  controllers: [MoviesController],
  providers: [MoviesService, MovieRepository],
  exports: [MoviesService],
})
export class CashinModule {}
