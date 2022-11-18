import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerService } from '../../consumer/consumer.service';
import { Movie } from '../entities/movies.entity';
import { MoviesService } from '../movies.service';
import { MovieRepository } from '../repositories/movie.repository';
import { moviesStub } from './stubs/movies.stub';
import { HttpService } from '@nestjs/axios';
import { MoviesController } from '../controllers/movies.controller';

jest.mock('../movies.service');

describe('Movies Controller', () => {
  let controller: MoviesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [MoviesController],
      providers: [
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(() => ({})),
          },
        },
        MoviesService,
        MovieRepository,
        ConsumerService,
        {
          provide: getModelToken(Movie.name),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);

    jest.clearAllMocks();
  });

  describe('registerMovie', () => {
    it('should return undefined if the whole process is ok', async () => {
      const response = await controller.registerMovie();

      expect(response).toBeUndefined();
    });
  });

  describe('listMovies', () => {
    it('should return a list of movies', async () => {
      const response = await controller.listMovies({
        itemsPerPage: 10,
        page: 1,
      });

      expect(response).toEqual([moviesStub()]);
    });
  });
});
