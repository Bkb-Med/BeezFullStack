import { DELETE_RUCHE, RUCHE_ERROR } from "../types";

export const deleteRuche = (id) => async (dispatch) => {
  try {
    const store = JSON.parse(localStorage.getItem("login"));
    const res = fetch(`http://localhost:8080/delete/ruche/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `bearer ${store.token}`,
        "content-type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      dispatch({
        type: DELETE_RUCHE,
        payload: "DELETED",
      });
    });
  } catch (e) {
    dispatch({
      type: RUCHE_ERROR,
      payload: console.log(e),
    });
  }
};
