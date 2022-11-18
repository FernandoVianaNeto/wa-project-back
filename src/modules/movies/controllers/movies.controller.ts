import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationParamsDto } from 'src/modules/common/pagination/dto';
import { MoviesService } from '../movies.service';

@Controller('movies')
@ApiTags('Movie')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('register')
  @ApiOperation({
    summary: 'Atualiza o banco de dados com os filmes.',
  })
  registerMovie() {
    return this.moviesService.consumeAndRegisterMovie();
  }

  @Get('list')
  @ApiOperation({
    summary: 'Retorna os filmes paginados.',
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna todos os filmes',
  })
  listMovies(@Query() paginationParamsDto: PaginationParamsDto) {
    return this.moviesService.list(paginationParamsDto);
  }
}
