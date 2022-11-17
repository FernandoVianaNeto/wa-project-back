import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { applyDecorators, Type } from '@nestjs/common';

export const PaginatedApi = <TModel extends Type<unknown>>(model: TModel) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          {
            properties: {
              _metadata: {
                properties: {
                  page: {
                    type: 'number',
                    example: 2,
                    description: 'Current page',
                    default: 1,
                  },
                  pageCount: {
                    type: 'number',
                    example: 10,
                    description: 'Total items on current page',
                  },
                  totalCount: {
                    type: 'number',
                    example: 45,
                    description: 'Total items in the query',
                  },
                  itemsPerPage: {
                    type: 'number',
                    description: 'Number of items per page',
                    example: 10,
                    default: 10,
                  },
                },
              },
              results: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
  );
};
