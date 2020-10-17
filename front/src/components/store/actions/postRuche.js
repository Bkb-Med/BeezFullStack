import { POST_RUCHE, RUCHE_ERROR } from "../types";

export const postRuche = (ruche) => async (dispatch) => {
  try {
    const store = JSON.parse(localStorage.getItem("login"));
    const res = fetch("http://localhost:8080/add/ruche", {
      method: "POST",
      headers: {
        Authorization: `bearer ${store.token}`,
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(ruche),
    }).then((res) => {
      dispatch({
        type: POST_RUCHE,
        payload: "SENDED",
      });
    });
  } catch (e) {
    dispatch({
      type: RUCHE_ERROR,
      payload: console.log(e),
    });
  }
};
