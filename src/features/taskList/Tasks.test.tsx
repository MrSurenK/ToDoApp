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

//Testing adding task to a non empty state
test("should handle a todo being added to a list with existing todos", () => {
  const previousState: TaskListSliceState = {
    task: [
      {
        name: "Test Todo",
        completion: false,
      },
    ],
    count: 0,
  };

  expect(reducer(previousState, add("Second todo"))).toEqual({
    task: [
      {
        name: "Test Todo",
        completion: false,
      },
      {
        name: "Second todo",
        completion: false,
      },
    ],
    count: 0,
  });
});

//Testing deleting a task off
test("should be able to delete selected task from the index input from the todo list", () => {
  const previousState: TaskListSliceState = {
    task: [
      {
        name: "Test Todo",
        completion: false,
      },
      {
        name: "Second todo",
        completion: false,
      },
    ],
    count: 0,
  };
  expect(reducer(previousState, del(0))).toEqual({
    task: [
      {
        name: "Second todo",
        completion: false,
      },
    ],
    count: 0,
  });
});
