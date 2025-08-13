/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ClientOptions, Groq } from 'groq-sdk';
import { envs } from 'src/config';
import { pullRequestReviewPrompt } from '../prompts/prReview';

const options: ClientOptions = {
  apiKey: envs.GROQ_API_KEY,
};

const groq = new Groq(options);

export async function sendCodeReview(message: string) {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: pullRequestReviewPrompt,
      },
      {
        role: 'user',
        content: message,
      },
    ],
    model: 'openai/gpt-oss-20b',
    temperature: 1,
    max_completion_tokens: 8192,
    top_p: 1,
    stream: false,
    reasoning_effort: 'medium',
    stop: null,
  });

  return chatCompletion.choices;
}

export const getCommentEndpoint = (
  workspace: string,
  slug: string,
  prId: number,
) => {
  return `https://api.bitbucket.org/2.0/repositories/${workspace}/${slug}/pullrequests/${prId}/comments`;
};
