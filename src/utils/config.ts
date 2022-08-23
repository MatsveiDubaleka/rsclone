import axios, { AxiosResponse } from "axios";
import { token } from "./token";

const instance = axios.create({
  baseURL: 'http://kinopoiskapiunofficial.tech/api/',

});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export const getData = async (url: string, APIToken: string = token) => {
  instance.defaults.headers.common['X-API-KEY'] = APIToken;

  await instance.get(url)
    .then(function (response: AxiosResponse) {
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

getData('v2.2/films')