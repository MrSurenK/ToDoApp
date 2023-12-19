import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface TaskListSliceState {
  task: string[];
  completion: boolean;
}

// type SliceState = { task: TaskList, completion: TaskList };

const initialState: TaskListSliceState = { task: [], completion: false };

export const taskFormSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.task.push(action.payload);
    },
    pending: (state, action: PayloadAction<boolean>) => {
      state.task.findIndex((task) => task);
    },
  },
});

export const { add, pending } = taskFormSlice.actions;

export const selectTask = (state: RootState) => state.toDos.task;

export default taskFormSlice.reducer;
