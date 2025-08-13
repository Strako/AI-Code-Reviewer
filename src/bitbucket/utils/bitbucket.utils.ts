/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException } from '@nestjs/common';
import {
  getCommentEndpoint,
  sendCodeReview,
} from 'src/common/helpers/common.utils';
import { CommitResponse } from 'src/common/interfaces';
import {
  getBaseHeaders,
  messageRequestOptions,
  requestOptions,
} from 'src/config';

export async function fetchCommit(commitUrl: string) {
  try {
    const response = await fetch(commitUrl, requestOptions);
    const result: CommitResponse = (await response.json()) as CommitResponse;

    return result;
  } catch (error: unknown) {
    throw new HttpException(
      `Error while fetching commit: ${String(error)}`,
      404,
    );
  }
}

export async function getchCommitDiff(diffUrl: string) {
  try {
    const response = await fetch(diffUrl, requestOptions);
    const result: string = await response.text();

    return result;
  } catch (error: unknown) {
    throw new HttpException(
      `Error while fetching commit: ${String(error)}`,
      404,
    );
  }
}

export async function postPrComment(
  reviewMd: string,
  workspace: string,
  slug: string,
  prId: number,
) {
  const options = messageRequestOptions(reviewMd);

  try {
    const response = await fetch(
      getCommentEndpoint(workspace, slug, prId),
      options,
    );

    const data = response.json();

    return data;
  } catch (error: any) {
    throw new HttpException(`Error submiting pr comment: ${error} `, 404);
  }
}

export async function getCodeReview(codeDiff: string) {
  try {
    const choices = await sendCodeReview(codeDiff);
    const data = choices.map((choice) => {
      return choice.message.content;
    });
    const result = data.join('\n');

    return result;
  } catch (error: unknown) {
    throw new HttpException(
      `Error while fetching commit: ${String(error)}`,
      404,
    );
  }
}
