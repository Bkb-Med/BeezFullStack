import { GET_TEMPS, TEMPS_ERROR } from "../types";
import axios from "axios";

export const getTemps = (id) => async dispatch => {
  try {
    const store = JSON.parse(localStorage.getItem('login'));
    const authAxios = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        Authorization: `Bearer ${store.token}`,
      },
    });
    authAxios.get(`/Temperature/ruche/${id}`).then(response => {
     
      const data = response.data;
      dispatch({
        type: GET_TEMPS,
        payload:
          data
      });
    }); 

  
  } catch (e) {
    dispatch({
      type: TEMPS_ERROR,
      payload: console.log(e)
    });
  }
};
