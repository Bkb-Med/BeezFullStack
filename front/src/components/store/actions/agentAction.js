import { GET_AGENT, AGENT_ERRORR } from "../types";
import axios from "axios";

export const getAgents = () => async dispatch => {
  try {
    const store = JSON.parse(localStorage.getItem('login'));
    const authAxios = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        Authorization: `Bearer ${store.token}`,
      },
    });
    const res = await authAxios.get(`/agents`);
    
    dispatch({
      type: GET_AGENT,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: AGENT_ERRORR,
      payload: console.log(e)
    });
  }
};
