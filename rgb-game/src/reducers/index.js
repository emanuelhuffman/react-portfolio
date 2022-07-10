import { combineReducers } from "redux";
import gameReducer from "./game";

const allReducers = combineReducers({
  game: gameReducer,
});

export default allReducers;
