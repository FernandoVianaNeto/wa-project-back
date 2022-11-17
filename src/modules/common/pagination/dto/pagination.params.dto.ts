import { IsNumber, IsOptional, IsNotEmpty, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationParamsDto {
  @IsOptional()
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number;

  @IsOptional()
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(5000)
  itemsPerPage?: number;
}
