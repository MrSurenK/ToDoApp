import React from "react";

const TaskForm = () => {
  return (
    <div className="flex flex-col space-y-8 items-center justify-center">
      <div className="text-7xl mt-60">To Do App</div>
      <form>
        <input
          className=" w-96 border-solid border-sky-500 rounded-md border-2"
          placeholder="Enter Task"
        />
        <button className="ml-2 px-4 py-2 bg-blue-700" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
