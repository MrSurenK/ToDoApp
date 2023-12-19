import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskList/taskFormSlice";

export const store = configureStore({
  reducer: {
    toDos: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

export type AppDispatch = typeof store.dispatch;

// This creates a redux store. amd also automatically configure the ReduxDevTools extension so that you can inspect the store while developing.
