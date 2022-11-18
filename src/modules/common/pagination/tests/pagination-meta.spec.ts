import { PaginationMeta, PaginationQuery } from '../models';
import { PaginationMetaObject } from '../interfaces';
import { moviesStub } from '../../../movies/tests/stubs/movies.stub';

describe('PaginationMeta class', () => {
  let paginationQuery: PaginationQuery;

  beforeEach(() => {
    paginationQuery = new PaginationQuery(1, 2);
  });

  describe('getValues', () => {
    it('should return an object with correct calculated values', () => {
      const expected: PaginationMetaObject = {
        _metadata: {
          page: 1,
          itemsPerPage: 2,
          totalCount: 1,
          pageCount: 1,
        },
      };
      const paginationMeta = new PaginationMeta(
        [[moviesStub()].slice(0, 2), [moviesStub()].length],
        paginationQuery.getValues(),
      );
      expect(paginationMeta.getValues()).toEqual<PaginationMetaObject>(
        expected,
      );
    });
  });
});
