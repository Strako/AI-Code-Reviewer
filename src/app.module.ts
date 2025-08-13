import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler/dist';
import { ExceptionsHandlerFilter } from './common/filters/exception-handler-filter';
import { MAX_REQUEST_BY_MINUTE, ONE_MINUTE_TO_MS } from './common/helpers';
import { ScheduleModule } from '@nestjs/schedule';
import { HellowordModule } from './helloworld/helloworld.module';
import { BitbucketModule } from './bitbucket/bitbucket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
    }),
    CacheModule.register({
      isGlobal: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([
      {
        ttl: ONE_MINUTE_TO_MS,
        limit: MAX_REQUEST_BY_MINUTE,
      },
    ]),
    HellowordModule,
    BitbucketModule,
    JwtModule,
    ScheduleModule.forRoot(),
  ],

  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_FILTER,
      useClass: ExceptionsHandlerFilter,
    },
  ],
})
export class AppModule {}
