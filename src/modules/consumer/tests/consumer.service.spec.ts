import { Test, TestingModule } from '@nestjs/testing';
import {
  axiosResponse,
  consumerStub,
} from '../../consumer/tests/stubs/consumer.stub';
import { ConsumerService } from '../../consumer/consumer.service';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';

describe('Movies Service', () => {
  let consumerService: ConsumerService;
  let httpService: HttpService;

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
        ConsumerService,
      ],
    }).compile();

    consumerService = module.get<ConsumerService>(ConsumerService);
    httpService = module.get<HttpService>(HttpService);

    jest.clearAllMocks();
  });

  describe('movieConsumer', () => {
    it('should return an array of cashin amount and id accounts', async () => {
      jest
        .spyOn(httpService, 'get')
        .mockImplementationOnce(() => of(axiosResponse(consumerStub())));

      const response = await consumerService.movieConsumer();

      expect(response).toEqual(consumerStub());
    });
  });
});
