import axios, { AxiosResponse } from 'axios';
import { token } from './token';

const instance = axios.create({
  baseURL: 'https://kinopoiskapiunofficial.tech/api/',
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export const getData = async (
  url: string,
  callback: (response: any) => void,
  APIToken: string = token
) => {
  instance.defaults.headers.common['X-API-KEY'] = APIToken;
  await instance
    .get(url)
    .then(function (response: AxiosResponse) {
      return response.data;
    })
    .then((responce) => {
      callback(responce);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

export const getDataItems = async (
  url: string,
  callback: (response: any) => void,
  APIToken: string = token
) => {
  instance.defaults.headers.common['X-API-KEY'] = APIToken;
  await instance
    .get(url)
    .then(function (response: AxiosResponse) {
      return response.data.items;
    })
    .then((responce) => {
      callback(responce);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

// getData('v2.2/films');

// export const getData =  async (url: string, callback: (response : any) => void, isLoadingCallback : (isLoading : boolean) => void, APIToken: string = token) => {
//   instance.defaults.headers.common['X-API-KEY'] = APIToken;
//   await instance.get(url)
//     .then(function (response: AxiosResponse) {
// 			return response.data;
//     })
// 		.then(responce => {
// 			callback(responce);
// 		})
// 		.then(() => isLoadingCallback(false))
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
// }
