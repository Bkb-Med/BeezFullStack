import { GET_WEIGHTS, WEIGHTS_ERROR } from "../types";
import axios from "axios";

export const getWeights = (id) => async dispatch => {
  try {
    const store = JSON.parse(localStorage.getItem('login'));
    const authAxios = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        Authorization: `Bearer ${store.token}`,
      },
    });
    const res = await authAxios.get(`/Weight/ruche/${id}`);
  
   

    dispatch({
      type: GET_WEIGHTS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: WEIGHTS_ERROR,
      payload: console.log(e)
    });
  }
};
