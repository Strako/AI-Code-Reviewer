import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { HelloworldResponseDto } from './dto';
import { Cache } from 'cache-manager';
@Injectable()
export class HelloworldService {
  constructor(
    private readonly httpService: HttpService,

    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  getHello(): HelloworldResponseDto {
    const greeting = { description: 'Hello world' };
    const result = new HelloworldResponseDto(greeting.description ?? 'Hi');

    return result;
  }
}
