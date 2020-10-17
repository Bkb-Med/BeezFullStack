import { GET_RUCHE, RUCHE_ERROR } from "../types";
import axios from "axios";

export const getRuche = (id) => async dispatch => {
  try {
    const store = JSON.parse(localStorage.getItem('login'));
    const authAxios = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        Authorization: `Bearer ${store.token}`,
       'content-type': 'application/json',
        'Accept': 'application/json',
      },
    });
    const res = await authAxios.get(`/endroit/ruches/${id}`);
    
    dispatch({
      type: GET_RUCHE,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: RUCHE_ERROR,
      payload: console.log(e)
    });
  }
};
