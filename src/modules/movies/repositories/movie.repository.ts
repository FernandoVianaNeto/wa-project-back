import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from '../../../database/entity.repository';
import { Cashin, CashinDocument } from '../entities/cashin.entity';

@Injectable()
export class CashinRepository extends EntityRepository<CashinDocument> {
  constructor(
    @InjectModel(Cashin.name)
    private cashinModel: Model<CashinDocument>,
  ) {
    super(cashinModel);
  }
}
