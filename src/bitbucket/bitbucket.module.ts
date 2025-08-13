import { HttpModule } from '@nestjs/axios';
import { BitbucketController } from './bitbucket.controller';
import { BitbucketService } from './bitbucket.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [BitbucketController],
  providers: [BitbucketService],
  exports: [BitbucketService],
})
export class BitbucketModule {}
