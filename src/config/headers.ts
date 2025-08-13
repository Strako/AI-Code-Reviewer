import { envs } from '.';

export const getBaseHeaders = () => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${envs.API_TOKEN}`);
  myHeaders.append('Accept', 'application/json');

  return myHeaders;
};

export const requestOptions = {
  method: 'GET',
  headers: getBaseHeaders(),
  redirect: 'follow' as RequestRedirect,
};

export const messageRequestOptions = (messageMd: string) => {
  const postHeaders = getBaseHeaders();
  postHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    content: {
      raw: messageMd,
    },
  });

  const requestOptions = {
    method: 'POST',
    headers: postHeaders,
    body: raw,
    redirect: 'follow' as RequestRedirect,
  };

  return requestOptions;
};
