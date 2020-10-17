import { GET_RUCHE, POST_RUCHE, PUT_RUCHE, DELETE_RUCHE } from "../types";

const initialState = {
  ruches: [],
  loading: true,
  Rdeleted: false,
  Rupdated: false,
  Rsended: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_RUCHE:
      return {
        ...state,
        Rsended: true,
      };
    case PUT_RUCHE:
      return {
        ...state,
        Rupdated: true,
      };
    case DELETE_RUCHE:
      return {
        ...state,
        Rdeleted: true,
      };
    case GET_RUCHE:
      return {
        ...state,
        ruches: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
