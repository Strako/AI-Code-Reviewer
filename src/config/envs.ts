import 'dotenv/config';

import * as joi from 'joi';
import { NODE_ENV } from '../common/enums';
import { EMPTY_STRING, ZERO } from '../common/helpers';

interface EnvVars {
  PORT: number;
  NODE_ENV: string;
  API_TOKEN: string;
  GROQ_API_KEY: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    NODE_ENV: joi
      .string()
      .valid(
        NODE_ENV.DEVELOP,
        NODE_ENV.QA,
        NODE_ENV.PREPROD,
        NODE_ENV.PROD,
        NODE_ENV.TEST,
      )
      .required(),
    API_TOKEN: joi.string().required(),
    GROQ_API_KEY: joi.string().required(),
  })
  .unknown(true);

let envVars: EnvVars = {
  PORT: ZERO,
  NODE_ENV: 'test',
  API_TOKEN: EMPTY_STRING,
  GROQ_API_KEY: EMPTY_STRING,
};

if (process.env.NODE_ENV !== NODE_ENV.TEST) {
  const validationResult = envsSchema.validate(process.env);

  if (validationResult.error) {
    throw new Error(
      `Config validation error: ${validationResult.error.message}`,
    );
  }

  envVars = validationResult.value as EnvVars;
}

export const envs = {
  port: envVars.PORT,
  nodeEnv: envVars.NODE_ENV,
  API_TOKEN: envVars.API_TOKEN,
  GROQ_API_KEY: envVars.GROQ_API_KEY,
};
