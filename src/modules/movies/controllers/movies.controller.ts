import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginationParamsDto } from 'src/modules/common/pagination/dto';
import { MoviesService } from '../movies.service';

@Controller('movies')
@ApiTags('Movie')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('register')
  @ApiOperation({
    summary: 'Retorna o total do cashin da conta num período.',
  })
  registerMovie() {
    return this.moviesService.consumeAndRegisterMovie();
  }

  @Get('list')
  @ApiOperation({
    summary: 'Retorna o total do cashin da conta num período.',
  })
  listMovies(@Query() paginationParamsDto: PaginationParamsDto) {
    return this.moviesService.listMovies(paginationParamsDto);
  }
}
