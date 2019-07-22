import axios from "axios";
import qs from "qs";
import { Toast } from "vant";

// let baseURL =
//   location.hostname == 'localhost'
//     ? "/api/djzchina-ops-b-api/"
//     : "/djzchina-ops-b-api/";

const instance = axios.create({
  baseURL: "",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});
// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    // Do something with response data
    // Toast.success(response);
    return response;
  },
  function(error) {
    // Do something with response error
    // Toast.fail(error);
    return Promise.reject(error);
  }
);
export default class Http {
  constructor() {}
  post(url, params = {}, contentType = "application/x-www-form-urlencoded") {
    return instance({
      method: "POST",
      headers: { "content-type": contentType },
      data: qs.stringify(params),
      url
    });
  }
  get(url, params = {}, contentType = "application/x-www-form-urlencoded") {
    return instance({
      method: "GET",
      headers: { "content-type": contentType },
      data: qs.stringify(params),
      url
    });
  }
}
