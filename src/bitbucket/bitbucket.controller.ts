import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BitbucketService } from './bitbucket.service';
import { TriggerReviewResponseDto } from './dto/trigger-review-response.dto';
import { Public } from 'src/common/decorators';
import { BitbucketPullRequestResponseDto } from './dto/bitbucket-request.dto';

@Controller({
  path: '/bitbucket',
  version: '1',
})
@ApiTags('Bitbucket')
export class BitbucketController {
  constructor(private readonly bitbucketService: BitbucketService) {}

  @Public()
  @Post('/reviews')
  @ApiOperation({ summary: 'Endpoint to trigger a powered AI pull request' })
  @ApiResponse({ status: HttpStatus.OK, type: TriggerReviewResponseDto })
  triggerReview(
    @Body() webhookResponse: BitbucketPullRequestResponseDto,
  ): Promise<TriggerReviewResponseDto> {
    return this.bitbucketService.triggerReview(webhookResponse);
  }
}
