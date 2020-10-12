import { GET_ENDROITS, ENDROITS_ERROR } from "../types";
import axios from "axios";

export const getEndroits = () => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8080/endroits`);

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
