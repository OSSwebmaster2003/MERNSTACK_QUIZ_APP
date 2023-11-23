import { createSlice } from "@reduxjs/toolkit";

export const question_reducer = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startExamAction: (state, action) => {
      return {
        ...state,
        queue: action.payload,
      };
    },
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    movePrevAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    resetAllAction: (state) => {
      return {
        queue: [],
        answers: [],
        trace: 0,
      };
    },
  },
});

export const {
  startExamAction,
  moveNextAction,
  movePrevAction,
  resetAllAction,
} = question_reducer.actions;
export default question_reducer.reducer;
