const request = (url, method, headers, body) => fetch(url, {
  method: method,
  headers: headers,
  body: JSON.stringify(body),
}).then((res) => {
  if (res.status === 200) {
    parseResponse(res);
  }
});

export const getData = async (url) => {
  return request(url);
}

export const postData = (url, method, headers, body) => {
  return request(url, method, headers, body);
}

export const putData = (url, method, headers, body) => {
  return request(url, method, headers, body);
}

const parseResponse = (response) => {
  if(response.status === 200) {
    console.log('redirect');
  } else if (response.ok) {
    console.log('PARSE DATA')
  } else {
    Promise.reject("Unhandled status")
  }
}