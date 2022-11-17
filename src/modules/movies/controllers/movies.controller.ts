import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MoviesService } from '../movies.service';

@Controller('movies')
@ApiTags('Movie')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('consult')
  @ApiOperation({
    summary: 'Retorna o total do cashin da conta num período.',
  })
  consultDriverCashinInPeriod() {
    return this.moviesService.consumeAndRegisterMovie();
  }
}
