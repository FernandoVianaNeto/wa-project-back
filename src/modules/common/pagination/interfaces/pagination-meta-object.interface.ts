export interface PaginationMetaObject {
  _metadata: {
    pageCount: number;
    totalCount: number;
    page: number;
    itemsPerPage: number;
  };
}
