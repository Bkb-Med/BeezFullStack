import { POST_AGENT,AGENT_ERROR } from "../types";


export const postAgent = (agent) => async dispatch => {
    try {
      const store = JSON.parse(localStorage.getItem('login'));
       const res = fetch('http://localhost:8080/add/agent', {
            method: "POST",
            headers: {
                'Authorization': `bearer ${store.token}`,
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(agent)
        }
       ).then(res => {
           dispatch({
               type: POST_AGENT,
               payload: "SENDED"
           })
       }
        )
  
  } catch (e) {
    dispatch({
      type: AGENT_ERROR,
      payload: console.log(e)
    });
  }
};
