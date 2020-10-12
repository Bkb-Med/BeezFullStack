import { GET_RUCHE, RUCHE_ERROR } from "../types";
import axios from "axios";

export const getRuche = (id) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8080/endroit/ruches/${id}`);

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
