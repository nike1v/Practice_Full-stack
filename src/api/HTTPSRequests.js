/* eslint-disable no-console */
const request = (url, method, headers, body) =>
  fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  }).then((res) => parseResponse(res));

export const getData = async (url) => await request(url);

export const postData = (url, body) =>
  request(
    url,
    'POST',
    {
      'Content-Type': 'application/json',
    },
    body
  );

export const putData = (url, body) =>
  request(
    url,
    'PUT',
    {
      'Content-Type': 'application/json',
    },
    body
  );

const parseResponse = async (response) => {
  /* console.log(response); */
  if (response.status === 200) {
    const data = await response.json();
    /* console.log(data); */
    return data;
  }
  if (response.status === 201) {
    /* console.log('POST Created'); */
    return response;
  }
  if (response.status === 401) {
    console.log('401');
  }
  if (response.status === 301) {
    console.log('301');
  }
  Promise.reject('Unhandled status');
};
