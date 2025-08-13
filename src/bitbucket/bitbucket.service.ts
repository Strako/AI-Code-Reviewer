/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { TriggerReviewResponseDto } from './dto/trigger-review-response.dto';
import { BitbucketPullRequestResponseDto } from './dto/bitbucket-request.dto';
import {
  fetchCommit,
  getchCommitDiff,
  getCodeReview,
  postPrComment,
} from './utils/bitbucket.utils';

@Injectable()
export class BitbucketService {
  constructor() {}

  async triggerReview(
    webhookResponse: BitbucketPullRequestResponseDto,
  ): Promise<TriggerReviewResponseDto> {
    const workspace = webhookResponse.repository.workspace.name;
    const slug = webhookResponse.repository.name;
    const pullRequestId = webhookResponse.pullrequest.id;

    const commitUrl = webhookResponse.pullrequest.source.commit.links.self.href;
    const commitData = await fetchCommit(commitUrl);
    const diffUrl = commitData.links.diff.href;
    const commitDiffData = await getchCommitDiff(diffUrl);
    const reviewMd = await getCodeReview(commitDiffData);

    const result = await postPrComment(
      reviewMd,
      workspace,
      slug,
      pullRequestId,
    );

    console.log(reviewMd);
    console.log(result);

    return new TriggerReviewResponseDto(result);
  }
}
