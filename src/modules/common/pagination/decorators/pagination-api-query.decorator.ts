import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

export const PaginationApiQuery = () =>
  applyDecorators(
    ApiQuery({ name: 'page', type: Number, required: false, example: 1 }),
    ApiQuery({
      name: 'itemsPerPage',
      type: Number,
      required: false,
      example: 5,
    }),
  );
