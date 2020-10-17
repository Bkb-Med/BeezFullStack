import { PUT_AGENT,AGENT_ERROR } from "../types";


export const putAgent = (agent) => async dispatch => {
    try {
      const store = JSON.parse(localStorage.getItem('login'));
       const res = 
           fetch('http://localhost:8080/update/agent', {
               method: "PUT",
               headers: {
                   'Authorization': `bearer ${store.token}`,
                   'content-type': 'application/json',
                   'Accept': 'application/json'
               },
               body: JSON.stringify(agent)
           }
       ).then(res => {
           dispatch({
               type: PUT_AGENT,
               payload: "EDITED"
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
