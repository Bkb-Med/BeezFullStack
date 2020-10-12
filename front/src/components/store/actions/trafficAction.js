import { GET_TRAFFICS, TRAFFICS_ERROR } from "../types";
import axios from "axios";

export const getTraffics = (id) => async dispatch => {


  try {
    axios.get(`http://localhost:8080/Traffic/ruche/${id}`).then(response => {
     
      const data = response.data;
      dispatch({
        type: GET_TRAFFICS, payload:
          data
      });
    }); 
    
   
  } catch (e) {
    dispatch({
      type: TRAFFICS_ERROR,
      payload: console.log(e)
    });
  }
};
   