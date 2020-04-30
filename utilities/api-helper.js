import { sendInfo, sendError } from 'utilities/event-helper';
import fetch from 'node-fetch';

const defaultFetchOptions = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

function parseResponse(response) {
  return response
    .json()
    .then((json) => {
      return { json, response };
    })
    .catch(() => {
      return { json: '', response };
    });
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function handleNotOk({ json, response }) {
  if (!response.ok) {
    const error = new Error(response.statusText);

    error.name = `${response.status} on ${response.url}`;

    throw error;
  }

  return { json, response };
}

function handleResponse({ json }) {
  return json.payload || json;
}

function handleFetchError(error) {
  return Promise.reject(error);
}

function handleRedirect({ json }) {
  if (json.redirectUrl) {
    window.location = json.redirectUrl;
  }

  return { json };
}

function handleUserInfo({ json, response }) {
  if (json.infoToUser) {
    if (json.success) {
      sendInfo(json.infoToUser);
    } else {
      sendError(json.infoToUser);
    }
  }

  return { json, response };
}

function request(url, options) {
  return fetch(url, options)
    .then(parseResponse)
    .then(handleNotOk)
    .then(handleRedirect)
    .then(handleUserInfo)
    .then(handleResponse)
    .catch(handleFetchError);
}

function post(endpoint, data) {
  return request(
    endpoint,
    Object.assign({}, defaultFetchOptions, {
      body: data,
      method: 'post',
    })
  );
}

function isStaticSiteRequest(url) {
  console.log('checking url:', url);
  return url.startsWith('http://localhost:3000/api');
}

function staticSiteRequest(endpoint, data) {
  // eslint-disable-next-line no-console
  console.log(`Fetching ${endpoint}`, data);
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = request(endpoint, defaultFetchOptions).then(
        (response) => {
          // eslint-disable-next-line no-console
          console.log(`Response from ${endpoint}`, response);
          return response;
        }
      );
      resolve(response);
    }, randomIntFromInterval(500, 1500));
  });
}

function get(endpoint) {
  return isStaticSiteRequest(endpoint)
    ? staticSiteRequest(endpoint)
    : request(endpoint, defaultFetchOptions);
}

function execute(endpoint, data) {
  return isStaticSiteRequest(endpoint)
    ? staticSiteRequest(endpoint, data)
    : post(endpoint, JSON.stringify(data));
}

export default {
  execute,
  get,
};
