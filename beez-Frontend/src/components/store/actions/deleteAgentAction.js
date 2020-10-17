import { DELETE_AGENT,AGENT_ERROR } from "../types";


export const deleteAgent = (id) => async dispatch => {
    try {
      const store = JSON.parse(localStorage.getItem('login'));
       const res = 
           fetch(`http://localhost:8080/delete/agent/${id}`,{
                    method: "DELETE",
                    headers: {
                    'Authorization': `bearer ${store.token}`,
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                    },
                    }
       ).then(res => {
           dispatch({
               type: DELETE_AGENT,
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
