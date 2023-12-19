import { useDispatch } from "react-redux";
import { add } from "./taskFormSlice";
import { useRef } from "react";

const TaskForm = () => {
  const dispatch = useDispatch();
  const task = useRef<string>("");

  return (
    <div className="flex flex-col space-y-8 items-center justify-center">
      <div className="text-7xl mt-60">To Do App</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => (task.current = e.target.value)}
          className=" w-96 border-solid border-sky-500 rounded-md border-2"
          placeholder="Enter Task"
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-700"
          type="submit"
          onClick={() => dispatch(add(task.current))}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
