import { createSlice } from "@reduxjs/toolkit";

export const result_reducer = createSlice({
  name: "result",
  initialState: {
    userId: null,
    result: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    pushResultAction: (state, action) => {
      state.result.push(action.payload);
    },
  },
});

export const { setUserId, pushResultAction } = result_reducer.actions;
export default result_reducer.reducer;
