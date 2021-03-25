const request = (url, method, headers, body) => fetch(url, {
  method: method,
  headers: headers,
  body: JSON.stringify(body),
}).then((res) => {
    return parseResponse(res);
});

export const getData = async (url) => {
  return await request(url);
}

export const postData = (url, method, headers, body) => {
  return request(url, method, headers, body);
}

export const putData = (url, method, headers, body) => {
  return request(url, method, headers, body);
}

const parseResponse = async (response) => {
  if(response.status === 200) {
    const data = await response.json();
    return data;
  } else if (response.ok) {
    console.log('res.ok');
  } else if (response.status === 401) {
    console.log('401');
  } else if (response.status === 301) {
    console.log('301');
  } else {
    Promise.reject("Unhandled status")
  }
}