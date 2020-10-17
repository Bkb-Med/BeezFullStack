import { GET_ENDROITS, ENDROITS_ERROR } from "../types";
import axios from "axios";

export const getEndroits = () => async dispatch => {
  try {
    const store = JSON.parse(localStorage.getItem('login'));
    const authAxios = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        Authorization: `Bearer ${store.token}`,
      },
    });
    const res = await authAxios.get(`/endroits`);
    
    dispatch({
      type: GET_ENDROITS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: ENDROITS_ERROR,
      payload: console.log(e)
    });
  }
};
