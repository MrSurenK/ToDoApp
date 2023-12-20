import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface TaskListSliceState {
  task: { name: string; completion: boolean }[];
  count: number;
}

// type SliceState = { task: TaskList, completion: TaskList };

const initialState: TaskListSliceState = { task: [], count: 0 };

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
      // counts the number of completed tasks
      state.count = state.task.filter((item) => item.completion).length;
      console.log(state.count);
    },
    del: (state, action: PayloadAction<number>) => {
      const taskIndex = action.payload;
      state.task = state.task.filter((_, index) => index !== taskIndex);
    },
  },
});

export const { add, pending, del, counter } = taskFormSlice.actions;

export const selectTask = (state: RootState) => state.toDos.task;
export const selectCounter = (state: RootState) => state.toDos.count;

export default taskFormSlice.reducer;
