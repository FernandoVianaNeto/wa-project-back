export class PaginatedResult<T> {
  results: T[];

  constructor(results: [Array<T>, number]) {
    this.results = results[0];
  }

  /**
   * Return result as object
   */
  getValues(): { results: T[] } {
    return { results: this.results };
  }
}
