import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Tasks from "./Tasks";
import { expect, test } from "vitest";

import reducer, {
  add,
  pending,
  del,
  TaskListSliceState,
} from "./taskFormSlice";

// Run unit test on the reducers

// Testing adding a task to an empty state
test("should handle a todo being added to an empty list", () => {
  const previousState: TaskListSliceState = {
    task: [],
    count: 0,
  };
  expect(reducer(previousState, add("Test Todo"))).toEqual({
    task: [
      {
        name: "Test Todo",
        completion: false,
      },
    ],
    count: 0,
  });
});
