import { moviesStub } from '../tests/stubs/movies.stub';

export const MoviesService = jest.fn().mockReturnValue({
  consumeAndRegisterMovie: jest.fn().mockReturnValueOnce(undefined),
  list: jest.fn().mockResolvedValueOnce([moviesStub()]),
});
