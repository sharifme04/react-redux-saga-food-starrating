import axios from 'axios';

const API_END_POINT = process.env.REACT_APP_RECIPES_API;

export const api = {
  fetchData() {
    return axios
      .get(API_END_POINT)
      .then(response => ({ recipes: response.data }))
      .catch(error => ({ error }));
  },
};
