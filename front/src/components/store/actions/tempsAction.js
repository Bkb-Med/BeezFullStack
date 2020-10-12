import { GET_TEMPS, TEMPS_ERROR } from "../types";
import axios from "axios";

export const getTemps = (id) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8080/Temperature/ruche/${id}`);

    dispatch({
      type: GET_TEMPS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: TEMPS_ERROR,
      payload: console.log(e)
    });
  }
};
