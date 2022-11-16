import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'nest-keycloak-connect';
import { MoviesService } from '../movies.service';

@Controller('/v1/cashin')
@ApiTags('Cashin - V1')
@ApiBearerAuth('App')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('consult')
  @ApiOperation({
    summary: 'Retorna o total do cashin da conta num período.',
  })
  @Roles({ roles: ['app_benefits'] })
  consultDriverCashinInPeriod() {
    return this.moviesService.returnOnly();
  }
}
