/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { readFileSync } from 'fs';

export const getVersion = (): string => {
  const packagejson = JSON.parse(readFileSync('././package.json', 'utf8'));
  const version = process.env.npm_package_version ?? packagejson.version;
  process.env.npm_package_version = version;

  return version;
};
