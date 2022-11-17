export interface PaginationObject {
  skip: number;
  take: number;
  originals: {
    page: number;
    itemsPerPage: number;
  };
}
