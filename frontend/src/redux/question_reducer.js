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
  },
});

export const { startExamAction } = question_reducer.actions;
export default question_reducer.reducer;
