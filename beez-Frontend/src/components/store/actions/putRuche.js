import { PUT_RUCHE, RUCHE_ERROR } from "../types";

export const putRuche = (ruche) => async (dispatch) => {
  try {
    const store = JSON.parse(localStorage.getItem("login"));
    const res = fetch("http://localhost:8080/update/ruche", {
      method: "PUT",
      headers: {
        Authorization: `bearer ${store.token}`,
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(ruche),
    }).then((res) => {
      dispatch({
        type: PUT_RUCHE,
        payload: "EDITED",
      });
    });
  } catch (e) {
    dispatch({
      type: RUCHE_ERROR,
      payload: console.log(e),
    });
  }
};
