let jwtToken = null;
let commonHeaders = {
  'Content-Type': 'application/json',
  'Authorization': null
}

export function httpService(text) {

  function get(endpoint) {
    return fetch(endpoint, {
      headers: commonHeaders
    });
  }

  function post(endpoint, body) {
    return fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: commonHeaders
    });
  }

  function setJwt(token) {
    jwtToken = token;
    commonHeaders.Authorization = jwtToken;
  }

  return {
    get,
    post,
    setJwt
  }

}


