import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
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
  listMovies() {
    return this.moviesService.listMovies();
  }
}
