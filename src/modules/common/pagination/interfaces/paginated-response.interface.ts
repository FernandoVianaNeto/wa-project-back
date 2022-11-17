import { PaginationMetaObject } from './pagination-meta-object.interface';

export interface PaginatedResponse<T> extends PaginationMetaObject {
  results: T[];
}
