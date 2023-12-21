import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskList/taskFormSlice";

// Redux store for web app
export const store = configureStore({
  reducer: {
    toDos: taskReducer,
  },
});

//Create rootreducer for react-testing-library setup file
const rootReducer = combineReducers({
  toDos: taskReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof store.getState>;

export default store;

export type AppDispatch = typeof store.dispatch;

// This creates a redux store. amd also automatically configure the ReduxDevTools extension so that you can inspect the store while developing.

// For react testing library set up
export type AppStore = ReturnType<typeof setupStore>;
