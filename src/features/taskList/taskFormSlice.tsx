import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type SliceState = { task: string[] };

const initialState: SliceState = { task: [] };

export const taskFormSlice = createSlice({
  name: "addToDo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.task.push(action.payload);
    },
  },
});

export const { add } = taskFormSlice.actions;

export const selectTask = (state: RootState) => state.addToDo.task;

export default taskFormSlice.reducer;
