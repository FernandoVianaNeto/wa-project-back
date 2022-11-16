import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer.service';

@Module({
  imports: [HttpModule.register({})],
  providers: [ConsumerService],
  exports: [ConsumerService],
})
export class ConsumerModule {}
