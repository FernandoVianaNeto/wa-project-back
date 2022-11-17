import { PaginationMetaObject, PaginationObject } from '../interfaces';

export class PaginationMeta {
  pageCount: number;

  totalCount: number;

  page: number;

  itemsPerPage: number;

  /**
   * @constructs
   * @param queryResult
   * @param paginationParams
   */
  constructor(
    queryResult: [Array<unknown>, number],
    paginationParams: PaginationObject,
  ) {
    this.pageCount = queryResult[0].length;
    this.totalCount = queryResult[1];
    this.itemsPerPage = paginationParams.originals.itemsPerPage;
    this.page = paginationParams.originals.page;
  }

  /**
   * Fetch the values formatted by metadata
   */
  getValues(): PaginationMetaObject {
    return {
      _metadata: {
        page: this.page,
        pageCount: this.pageCount,
        totalCount: this.totalCount,
        itemsPerPage: this.itemsPerPage,
      },
    };
  }
}
