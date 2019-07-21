import axios from "axios";
import qs from "qs";
import { message } from "element-ui";

let baseURL =
  location.hostname == localhost
    ? "/api/djzchina-ops-b-api/"
    : "/djzchina-ops-b-api/";

const instance = axios.create({
  baseURL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});
axios
  .post("/task/getBrandListByUser")
  .then(function(response) {
    if (response.data.code == 0) {
      console.log(response.data.data);
    }
  })
  .catch(function(error) {
    console.log(error);
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
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
