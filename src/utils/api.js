/**
 * Author: Rahul Shetty
 * Date: 13/10/2019
 *
 * API Wrapper for the app
 * @flow
 */
import { BASE_URL } from 'react-native-dotenv';
import { format } from './url';

// We can change the content-type property as per your need
type FetchHeaders = {
  'Content-Type': string,
  authorization?: string,
};

type FetchOptions = {
  method: string,
  mode: string,
  headers: FetchHeaders,
};

const ERR_CODE = {
  unauthorized: 401,
};

const TIMEOUT = 20000;

/**
 * Supported HTTP verbs to implement as methods.
 * @private
 */
const methods: Array<HTTPVerb> = ['get', 'post', 'put', 'patch', 'delete'];

/**
 * Service endpoints which do not require authentication.
 */
// const publicEndpoints: Array<string> = [
//   'franchise/send-consultant-login-otp',
//   'franchise/consultant-otp-validate',
// ];

/**
 * Create the event base for use as a Redux action type.
 *
 * @param {HTTPVerb} method - HTTP verb.
 * @param {string} event - String.
 *
 * @example
 *
 *   createEventBase('get', 'friends_list');
 *   #=> 'GET_FRIENDS_LIST'
 *
 * @returns {string}
 */
const createEventBase = (method: HTTPVerb, event: string): string =>
  `${method}_${event}`.toUpperCase();

function fetchWithTimeout(url, options, timeout = TIMEOUT) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), timeout),
    ),
  ]);
}

/**
 * Parse the API endpoint string.
 *
 * @param {string} endpoint - Endpoint.
 * @param {string} customBaseUrl - Custom base URL ex: Third Party URLs.
 *
 * @example
 *
 *   parseEndpoint('article/block/') #=> 'http://host/article/block/'
 *
 * @returns ParsedEndpoint: string
 */
const parseEndpoint = (
  endpoint: string,
  customBaseUrl?: string = '',
): string => {
  const base = customBaseUrl || BASE_URL;
  const url = `${base}/${endpoint}`;

  return url;
};

/**
 * Check if a reponse is JSON data.
 *
 * @param {Response} resp - Fetch API Response object.
 *
 * @returns {boolean}
 */
const isJson = resp => resp.headers.get('content-type') === 'application/json';

/**
 * API wrapper.
 *
 * @param {string} endpoint - Endpoint to request.
 * @param {object} options - Options object for `fetch`.
 * @param {function} callback - Callback function.
 *
 * @returns {promise}
 */
function api(
  endpoint: string,
  options: Object = {},
  callback: Dispatch = (): void => {},
) {
  const url = parseEndpoint(endpoint, options.customBaseUrl);
  let fetchOptions: FetchOptions = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Set user token for APIs
  // if (getUserDetails() && getUserDetails().consultantToken && !publicEndpoints.includes(endpoint)) {
  //   fetchOptions.headers.authorization = `Bearer ${getUserDetails().consultantToken}`;
  //
  //   callback({
  //     type: AUTH_TYPES.API_AUTHENTICATION_ERROR,
  //     error: 'No authorization set.',
  //   });
  //
  //   return new Promise((resolve, reject) =>
  //     reject(new Error('No authorization set.'))
  //   );
  // }

  /**
   * One can further extend the fetchOptions to include more options such as:
   *
   * fetchOptions.headers.authorization = getAuthorizationHeader();
   */

  // Allow overwriting default fetch options with user's custom options.
  fetchOptions = { ...fetchOptions, ...options.fetchOptions };
  const eventBase = createEventBase(fetchOptions.method, options.eventBase);
  const queryParams = { ...options.queryParams };
  const actionData = {
    ...options.actionData,
    fetchOptions,
    queryParams,
  };

  // Fire off the initial request event.
  callback({
    type: `${eventBase}_REQUEST`,
    ...actionData,
  });

  // Append query params.
  const finalURL = `${url}${format(queryParams)}`;

  // Handler for api and json parsing errors.
  const handleApiError = (err: Error | Object) => {
    callback({
      type: `${eventBase}_ERROR`,
      err: err.message,
      ...actionData,
    });

    if (options.error) {
      options.error(err);
    }

    return err;
  };

  // Handler for successful api calls.
  const handleApiSuccess = response => {
    callback({
      type: `${eventBase}_SUCCESS`,
      response,
      ...actionData,
    });

    if (options.success) {
      options.success(response);
    }

    return response;
  };

  return fetchWithTimeout(finalURL, fetchOptions)
    .then(resp => {
      if (resp.ok) {
        return resp
          .json()
          .then(handleApiSuccess)
          .catch(handleApiError);
      }

      if (resp.status === ERR_CODE.unauthorized) {
        return Promise.reject(new Error('Unauthorized request'));
      }

      if (isJson(resp)) {
        return resp
          .json()
          .then(handleApiError)
          .catch(handleApiError);
      }

      return handleApiError(resp);
    })
    .catch(err => {
      // Network error.
      callback({
        type: 'NETWORK_ERROR',
        attemptedAction: eventBase,
        err,
        ...actionData,
      });

      handleApiError(err);
    });
}

// Attach convenience methods to the `api` function.
methods.forEach((method: HTTPVerb): void => {
  const verb = method.toUpperCase();

  api[method] = (endpoint: string, options: Object, callback) => {
    const newOptions = {
      ...options,
      fetchOptions: {
        ...options.fetchOptions,
        method: verb,
      },
    };

    return api(endpoint, newOptions, callback);
  };
});

export default api;
