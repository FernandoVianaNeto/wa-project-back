import { PaginationObject } from '../interfaces';

/**
 * Transforms the values obtained by parameters into useful values in pagination
 */
export class PaginationQuery {
  skip: number;

  take: number;

  page: number;

  itemsPerPage: number;

  /**
   * @constructs
   * @param page
   * @param itemsPerPage
   */
  constructor(page = 1, itemsPerPage = 5) {
    this.skip = (page - 1) * itemsPerPage;
    this.take = itemsPerPage;
    this.page = page;
    this.itemsPerPage = itemsPerPage;
  }

  /**
   * Returns pagination values as object
   */
  getValues(): PaginationObject {
    return {
      skip: this.skip,
      take: this.take,
      originals: { page: this.page, itemsPerPage: this.itemsPerPage },
    };
  }
}
