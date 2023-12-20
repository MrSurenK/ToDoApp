import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface TaskListSliceState {
  task: { name: string; completion: boolean }[];
}

// type SliceState = { task: TaskList, completion: TaskList };

const initialState: TaskListSliceState = { task: [] };

export const taskFormSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.task.push({ name: action.payload, completion: false });
    },
    pending: (state, action: PayloadAction<string>) => {
      const taskName = action.payload;
      const taskIndex = state.task.findIndex((task) => task.name === taskName);

      if (taskIndex !== -1) {
        // Toggle completion for the found task directly
        state.task[taskIndex].completion = !state.task[taskIndex].completion;
      }
    },
    del: (state, action: PayloadAction<number>) => {
      const taskIndex = action.payload;
      state.task = state.task.filter((_, index) => index !== taskIndex);
      console.log(state.task);
    },
  },
});

export const { add, pending, del } = taskFormSlice.actions;

export const selectTask = (state: RootState) => state.toDos.task;

export default taskFormSlice.reducer;
