import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// This creates a redux store. amd also automatically configure the ReduxDevTools extension so that you can inspect the store while developing.
