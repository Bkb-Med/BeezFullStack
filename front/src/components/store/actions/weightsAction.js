import { GET_WEIGHTS, WEIGHTS_ERROR } from "../types";
import axios from "axios";

export const getWeights = (id) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8080/Weight/ruche/${id}`);

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
