import { PaginatedResponse, PaginationObject } from '../interfaces';
import { PaginatedResult, PaginationMeta } from '../models';

export const paginate = <T>(
  queryResults: [Array<T>, number],
  paginationParams: PaginationObject,
): PaginatedResponse<T> => {
  const paginationResult = new PaginatedResult(queryResults);
  const paginationMeta = new PaginationMeta(queryResults, paginationParams);

  return {
    ...paginationResult.getValues(),
    ...paginationMeta.getValues(),
  };
};
