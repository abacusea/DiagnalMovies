import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";

const rootReducer = combineReducers({
  moviesReducer: movieReducer
});

export default rootReducer;
