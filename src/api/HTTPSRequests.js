import { jsonServer } from '../constants/headers';

const request = (url, method, headers, body) =>
  fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  }).then((res) => parseResponse(res));

export const getData = async (url) => await request(url);

export const postData = (url, body) => request(url, 'POST', jsonServer, body);

export const putData = (url, body) => request(url, 'PUT', jsonServer, body);

const parseResponse = async (response) => {
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw response;
};
