import { PaginationQuery } from '../models';
import { PaginationObject } from '../interfaces';

describe('PaginationQuery class', () => {
  it('should generate a pagination class with default values', () => {
    const paginationQuery = new PaginationQuery();
    const expected: PaginationObject = {
      skip: 0,
      take: 5,
      originals: {
        page: 1,
        itemsPerPage: 5,
      },
    };
    expect<PaginationQuery>(paginationQuery).toBeTruthy();
    expect<PaginationObject>(paginationQuery.getValues()).toEqual(expected);
  });

  it('should generate a pagination class with inserted values', () => {
    const expected: PaginationObject = {
      skip: 20,
      take: 20,
      originals: { page: 2, itemsPerPage: 20 },
    };
    const paginationQuery = new PaginationQuery(2, 20);
    expect<PaginationObject>(paginationQuery.getValues()).toEqual(expected);
  });

  it('should generate all attributes with correct values calculated', () => {
    const paginationQuery = new PaginationQuery(2, 20);
    expect(paginationQuery.page).toBe(2);
    expect(paginationQuery.take).toBe(20);
    expect(paginationQuery.page).toBe(2);
    expect(paginationQuery.skip).toBe(20);
  });
});
