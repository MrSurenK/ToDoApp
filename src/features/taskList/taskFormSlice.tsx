import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type SliceState = { value: "" };

const initialState: SliceState = { value: "" };

export const taskFormSlice = createSlice({
  name: "addToDo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { add } = taskFormSlice.actions;

export const selectTask = (state: RootState) => state.addToDo.value;

export default taskFormSlice.reducer;
