import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class CashinService {
  constructor(
    private cashinRepository: CashinRepository,
    private readonly certificateService: CertificateService,
  ) {}
}
