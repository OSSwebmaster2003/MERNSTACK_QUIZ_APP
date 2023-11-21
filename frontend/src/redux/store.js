import { combineReducers, configureStore } from "@reduxjs/toolkit";
// call reducers
import question_reducer from "./question_reducer";
import { result_reducer } from "./result_reducer";

const rootReducer = combineReducers({
  questions: question_reducer,
  result: result_reducer,
});

// create store
export default configureStore({ reducer: rootReducer });
