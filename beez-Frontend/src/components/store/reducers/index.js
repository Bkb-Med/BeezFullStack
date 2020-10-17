import { combineReducers } from "redux";
import agentReducer from "./agentReducer";
import endroitsReducer from "./endroitsReducer";
import rucheReducer from "./rucheReducer";
import tempsReducer from "./tempsReducer";
import trafficsReducer from "./trafficsReducer";
import weightsReducer from "./weightsReducer";

export default combineReducers({
  endroits: endroitsReducer,
  ruches: rucheReducer,
  temps: tempsReducer,
  traffics: trafficsReducer,
  weights: weightsReducer,
  agents: agentReducer,
  QueryState: agentReducer,
  Edited: agentReducer,
  Deleted: agentReducer,
  Rdeleted: rucheReducer,
  Rupdated: rucheReducer,
  Rsended: rucheReducer,
});
