import { useDispatch } from "react-redux";
import { add } from "./taskFormSlice";
import { useRef, useState } from "react";
import Tasks from "./Tasks";

const TaskForm = () => {
  const dispatch = useDispatch();
  const task = useRef<string>("");
  // local state to reset input field after submitting form
  const [userInputVal, setUserInputVal] = useState("");

  return (
    <div className="flex flex-col space-y-8 items-center justify-center">
      <div className="text-7xl mt-60">To Do App</div>
      <div className="flex flex-row space-y-4 items-center justify-center">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            value={userInputVal}
            onChange={(e) => {
              setUserInputVal(e.target.value);
              task.current = e.target.value;
            }}
            className=" w-96 border-solid border-sky-500 rounded-full border-2 px-8 py-2 placeholder:text-center text-md"
            placeholder="Enter Task"
          />
          <div className="inline-block">
            <button
              className="ml-2 px-4 py-2 bg-blue-700 rounded-full text-white shadow-lg hover:shadow-sky-700"
              type="submit"
              onClick={() => {
                setUserInputVal(" ");
                dispatch(add(task.current));
              }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <Tasks></Tasks>
    </div>
  );
};

export default TaskForm;
