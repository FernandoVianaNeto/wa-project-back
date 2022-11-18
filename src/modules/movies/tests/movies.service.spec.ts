import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { consumerStub } from '../../consumer/tests/stubs/consumer.stub';
import { ConsumerService } from '../../consumer/consumer.service';
import { Movie, MovieDocument } from '../entities/movies.entity';
import { MoviesService } from '../movies.service';
import { MovieRepository } from '../repositories/movie.repository';
import { createMovieDtoStub, moviesStub } from './stubs/movies.stub';
import { HttpService } from '@nestjs/axios';

describe('Movies Service', () => {
  let moviesService: MoviesService;
  let consumerService: ConsumerService;
  let movieRepository: MovieRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
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

    moviesService = module.get<MoviesService>(MoviesService);
    movieRepository = module.get<MovieRepository>(MovieRepository);
    consumerService = module.get<ConsumerService>(ConsumerService);

    jest.clearAllMocks();
  });

  describe('consumerAndRegisterMovie', () => {
    it('should return an array of cashin amount and id accounts', async () => {
      jest
        .spyOn(consumerService, 'movieConsumer')
        .mockResolvedValueOnce([consumerStub()]);

      jest
        .spyOn(moviesService, 'create')
        .mockResolvedValueOnce(moviesStub() as MovieDocument);

      const response = await moviesService.consumeAndRegisterMovie();

      expect(response).toBeUndefined();
    });
  });

  describe('create', () => {
    it('should return an array of cashin amount and id accounts', async () => {
      jest
        .spyOn(movieRepository, 'create')
        .mockResolvedValueOnce(moviesStub() as MovieDocument);

      const response = await moviesService.create(createMovieDtoStub());

      expect(response).toEqual(moviesStub());
    });
  });

  describe('list', () => {
    it('should return an array of cashin amount and id accounts', async () => {
      jest
        .spyOn(movieRepository, 'find')
        .mockResolvedValueOnce([moviesStub() as MovieDocument]);

      jest.spyOn(movieRepository, 'countDocuments').mockResolvedValueOnce(50);

      const response = await moviesService.list({ itemsPerPage: 10, page: 1 });

      expect(response).toEqual({
        results: [moviesStub()],
        _metadata: {
          page: 1,
          pageCount: 1,
          totalCount: 50,
          itemsPerPage: 10,
        },
      });
    });
  });
});
