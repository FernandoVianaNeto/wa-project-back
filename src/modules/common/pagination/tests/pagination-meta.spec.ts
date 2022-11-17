import { PaginationMeta, PaginationQuery } from '../models';
import { PaginationMetaObject } from '../interfaces';
import { driverBonusCreditCreatedStub } from '../../../driver-bonus/driver-bonus-credits/tests/stubs/driver-bonus-credits.stub';

describe('PaginationMeta class', () => {
  let paginationQuery: PaginationQuery;

  beforeEach(() => {
    paginationQuery = new PaginationQuery(1, 2);
  });

  it('should make an object with correct data', () => {
    const paginationMeta = new PaginationMeta(
      [
        [driverBonusCreditCreatedStub()].slice(0, 2),
        [driverBonusCreditCreatedStub()].length,
      ],
      paginationQuery.getValues(),
    );
    expect<PaginationMeta>(paginationMeta).toBeTruthy();
    expect(paginationMeta.page).toBe<number>(1);
    expect(paginationMeta.itemsPerPage).toBe<number>(2);
    expect(paginationMeta.totalCount).toBe<number>(1);
    expect(paginationMeta.pageCount).toBe<number>(1);
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
        [
          [driverBonusCreditCreatedStub()].slice(0, 2),
          [driverBonusCreditCreatedStub()].length,
        ],
        paginationQuery.getValues(),
      );
      expect(paginationMeta.getValues()).toEqual<PaginationMetaObject>(
        expected,
      );
    });
  });
});
