import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HelloworldController } from './helloworld.controller';
import { HelloworldService } from './helloworld.service';

@Module({
  imports: [HttpModule],
  controllers: [HelloworldController],
  providers: [HelloworldService],
  exports: [HelloworldService],
})
export class HellowordModule {}
