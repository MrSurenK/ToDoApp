import { describe, expect, test, vi } from "vitest";
import { fireEvent, screen, waitFor } from "@testing-library/react";

import reducer, {
  add,
  pending,
  del,
  TaskListSliceState,
} from "./taskFormSlice";

import { renderWithProviders } from "../../test/setup";
import Tasks from "./Tasks";
import TaskForm from "./TaskForm";

// Unit testing individual functions

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

//Test pending reducer and action to change state
test("should change completion state to false if true and count should be incremented by 1", () => {
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
  expect(reducer(previousState, pending("Test Todo"))).toEqual({
    task: [
      {
        name: "Test Todo",
        completion: true,
      },
      {
        name: "Second todo",
        completion: false,
      },
    ],
    count: 1,
  });
});

test("should change completed task state back to false if true and decrement count", () => {
  const previousState: TaskListSliceState = {
    task: [
      {
        name: "Test Todo",
        completion: true,
      },
      {
        name: "Second todo",
        completion: false,
      },
    ],
    count: 1,
  };

  expect(reducer(previousState, pending("Test Todo"))).toEqual({
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

test("completed task should remain completed when new task added and new task should be given default of false for completion", () => {
  const previousState1: TaskListSliceState = {
    task: [
      {
        name: "Test Todo",
        completion: true,
      },
      {
        name: "Second todo",
        completion: false,
      },
    ],
    count: 1,
  };
  expect(reducer(previousState1, pending("Second todo"))).toEqual({
    task: [
      {
        name: "Test Todo",
        completion: true,
      },
      {
        name: "Second todo",
        completion: true,
      },
    ],
    count: 2,
  });

  const previousState2: TaskListSliceState = {
    task: [
      {
        name: "Test Todo",
        completion: true,
      },
      {
        name: "Second todo",
        completion: true,
      },
    ],
    count: 2,
  };
  expect(reducer(previousState2, add("New Task"))).toEqual({
    task: [
      {
        name: "Test Todo",
        completion: true,
      },
      {
        name: "Second todo",
        completion: true,
      },
      {
        name: "New Task",
        completion: false,
      },
    ],
    count: 2,
  });
});

// Unit Test on React components
// Unit test to test that input box takes in a input
describe.sequential("to do list components render correctly", () => {
  test("input box takes in user input", async () => {
    renderWithProviders(<TaskForm></TaskForm>);
    const input = screen.getByPlaceholderText("Enter Task");
    fireEvent.change(input, { target: { value: "test todo" } });
    await waitFor(() => {
      expect(input).toHaveValue("test todo");
    });
  });
  test("Test button click to ensure that it works", () => {
    const handleClick = vi.fn();
    renderWithProviders(<TaskForm onClick={handleClick}></TaskForm>);
    fireEvent.click(screen.getByText("Add"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
